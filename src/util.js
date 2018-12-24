export const getLastDate = date => new Date(date.getFullYear(), date.getMonth() + 1, 0)

export const createDateArray = (date, arrayLength, startValue = 1) => {
  return [...Array(arrayLength)].map((value, index) => {
    const day = startValue + index
    return {
      day: day,
      date: new Date(date.getFullYear(), date.getMonth(), day)
    }
  })
}

export const reindexDayOfWeek = firstWeekDay => {
  const baseCount = 7 - firstWeekDay
  return [0, 1, 2, 3, 4, 5, 6].map((value, _) => {
    if (firstWeekDay === value) {
      return 0
    }
    return value > firstWeekDay ? value - firstWeekDay : baseCount + value
  })
}
