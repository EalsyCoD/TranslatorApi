import { expect, describe, it } from '@jest/globals'

import { randomId } from './randomId'

describe('randomId', () => {
  it('Should return string length 7 symbols', () => {
    expect(randomId().length).toEqual(
      Math.random().toString(36).substring(2, 9).length,
    )
  })

  it('Should return string length 7 symbols', () => {
    expect(randomId().length).toEqual(
      Math.random().toString(30).substring(2, 9).length,
    )
  })
})
