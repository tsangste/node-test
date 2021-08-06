import assert from 'assert'
import { mostCount } from '../src/challenge1'

describe('challenge 1', () => {
  it('Single most count', () => {
    const answer = mostCount([1, 5, 7, 6, 5, 8, 4, 7, 5, 3, 12, 4, 11, 6])

    assert.strictEqual(answer, 5)
  })

  it('Multiple most count', () => {
    const answer = mostCount([0, 1, 6, 4, 5, 7, 6, 1, 3, 7, 9, 10, 6, 7])

    assert.deepStrictEqual(answer, [6, 7])
  })
})
