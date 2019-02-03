import {
  TYPE_DEFINITION,
  OPEN_BRACES,
  CLOSE_BRACES,
  EQUAL,
  TYPE,
  ID,
  VARIABLE
} from '../src/constants'
import { hasValidGrammar, parse } from '../src/parser'

describe('parser', () => {
  it('throws syntax error', () => {
    const tokens = [
      { token: TYPE_DEFINITION },
      { token: VARIABLE, value: 'User' },
      { token: OPEN_BRACES },
      { token: VARIABLE, value: 'id' },
      { token: EQUAL },
      { token: TYPE_DEFINITION },
      { token: VARIABLE, value: 'name' },
      { token: EQUAL },
      { token: TYPE, value: 'STRING' },
      { token: CLOSE_BRACES }
    ]

    expect(() => hasValidGrammar(tokens)).toThrowErrorMatchingSnapshot()
  })

  it('returns true when valid', () => {
    const tokens = [
      { token: TYPE_DEFINITION },
      { token: VARIABLE, value: 'User' },
      { token: OPEN_BRACES },
      { token: VARIABLE, value: 'id' },
      { token: EQUAL },
      { token: TYPE, value: ID },
      { token: VARIABLE, value: 'name' },
      { token: EQUAL },
      { token: TYPE, value: 'STRING' },
      { token: CLOSE_BRACES }
    ]

    expect(hasValidGrammar(tokens)).toBeTruthy()
  })

  it('returns false when incomplete', () => {
    const tokens = [
      { token: TYPE_DEFINITION },
      { token: VARIABLE, value: 'User' },
      { token: OPEN_BRACES },
      { token: VARIABLE, value: 'id' },
      { token: EQUAL },
      { token: TYPE, value: ID },
      { token: VARIABLE, value: 'name' },
      { token: EQUAL },
      { token: TYPE, value: 'STRING' }
    ]

    expect(hasValidGrammar(tokens)).toBeFalsy()
  })

  it('creates an AST', () => {
    const tokens = [
      { token: TYPE_DEFINITION },
      { token: VARIABLE, value: 'User' },
      { token: OPEN_BRACES },
      { token: VARIABLE, value: 'id' },
      { token: EQUAL },
      { token: TYPE, value: ID },
      { token: VARIABLE, value: 'name' },
      { token: EQUAL },
      { token: TYPE, value: 'STRING' },
      { token: CLOSE_BRACES }
    ]
    expect(parse(tokens)).toMatchSnapshot()
  })
})
