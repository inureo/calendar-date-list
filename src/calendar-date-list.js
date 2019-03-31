import {
  getLastDate,
  createDateArray,
  reindexDayOfWeek
} from './util'

export default class CalendarDateList {
  constructor(firstWeekDay = 0) {
    if (typeof firstWeekDay !== 'number') {
      throw new Error('firstWeekDay must be a number')
    }
    this.DAY_OF_WEEK_INDEX = 6
    this.firstWeekDay = firstWeekDay
    this.reindexDayOfWeek = reindexDayOfWeek(this.firstWeekDay)
  }

  getDates(year, month) {
    const firstDate = new Date(year, month, 1)
    const lastDate = getLastDate(firstDate)
    const lastMonthDate = new Date(year, month, 0)
    const nextMonthDate = new Date(year, month + 1, 1)

    const lastMonthShortageDays = this.reindexDayOfWeek[firstDate.getDay()]
    const lastMonthShortageDates = createDateArray(
        lastMonthDate,
        lastMonthShortageDays,
        lastMonthDate.getDate() - lastMonthShortageDays + 1
    )
    const nextMonthShortageDates = createDateArray(nextMonthDate, this._compensateNextMonthDates(lastDate.getDay()))
    const currentMonthDates = createDateArray(lastDate, lastDate.getDate())

    const dates = [...lastMonthShortageDates, ...currentMonthDates, ...nextMonthShortageDates]

    return dates.reduce((rows, key, index) => {
      index % 7 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)
      return rows
    }, [])
  }

  _compensateNextMonthDates(index) {
    return this.DAY_OF_WEEK_INDEX - this.reindexDayOfWeek[index]
  }
}
