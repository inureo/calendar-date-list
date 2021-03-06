import CalendarDateList from '../src/calendar-date-list'

import {
  calendar4Week,
  calendar6Week,
  calendarWithoutPreviousMonth,
  calendarWithoutNextMonth,
  calendarWithNextMonthOfNextYear,
  calendarWithPreviousMonthOfPreviousYear
} from './fixtures'

describe('Calendar', () => {
  describe('constructor()', () => {
    it('should be throw Error if other than numbers', () => {
      expect(() => new CalendarDateList('string')).toThrow('firstWeekDay must be a number')
      expect(() => new CalendarDateList('string')).toThrow(Error)
    })

    it('should be return Calendar Instance if argument empty', () => {
      expect(new CalendarDateList()).toBeInstanceOf(CalendarDateList)
    })

    it('should be return Calendar Instance if argument number', () => {
      expect(new CalendarDateList(1)).toBeInstanceOf(CalendarDateList)
    })
  })

  describe('getDates()', () => {
    const sundayBeginningCalendar = new CalendarDateList()
    it('should be return 4 week calendar', () => {
      expect(sundayBeginningCalendar.getDates(2015, 1)).toEqual(calendar4Week)
    })

    it('should be return 6 week calendar', () => {
      expect(sundayBeginningCalendar.getDates(2019, 2)).toEqual(calendar6Week)
    })

    it('should be return calendar without the previous month', () => {
      expect(sundayBeginningCalendar.getDates(2019, 8)).toEqual(calendarWithoutPreviousMonth)
    })

    it('should be return calendar without the next month', () => {
      expect(sundayBeginningCalendar.getDates(2019, 10)).toEqual(calendarWithoutNextMonth)
    })

    describe('if last month or next month crosses the year', () => {
      it('should be return current calendar with next month of next year', () => {
        expect(sundayBeginningCalendar.getDates(2019, 11)).toEqual(calendarWithNextMonthOfNextYear)
      })
      it('should be return current calendar with last month of last year', () => {
        expect(sundayBeginningCalendar.getDates(2020, 0)).toEqual(calendarWithPreviousMonthOfPreviousYear)
      })
    })
  })
})
