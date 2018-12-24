import {
  getLastDate,
  createDateArray,
  reindexDayOfWeek
} from '../src/util'

import {
  caseOfMondayBeginning,
  caseOfSaturdayBeginning,
  caseOfWednesdayBeginning,
  date201901
} from './fixtures'

describe('getLastDate()', () => {
  it('should be return last date of argument month', () => {
    expect(getLastDate(new Date(2019, 1))).toEqual(new Date(2019, 1, 28))
    expect(getLastDate(new Date(2020, 1))).toEqual(new Date(2020, 1, 29))
  })
})

describe('createDateArray()', () => {
  it('should be return ', () => {
    expect(createDateArray(new Date(2019, 0, 1), 31)).toEqual(date201901)
  })
})

describe('reindexDayOfWeek()', () => {
  it('should be return array of days of the week when the argument is the start date', () => {
    expect(reindexDayOfWeek(0)).toEqual(caseOfMondayBeginning)
    expect(reindexDayOfWeek(6)).toEqual(caseOfSaturdayBeginning)
    expect(reindexDayOfWeek(3)).toEqual(caseOfWednesdayBeginning)
  })
})
