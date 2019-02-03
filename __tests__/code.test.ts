import { generateCode } from '../src/generator'
import { parse } from '../src/parser'
import {
  TYPE_DEFINITION,
  OPEN_BRACES,
  CLOSE_BRACES,
  EQUAL,
  TYPE,
  ID,
  VARIABLE
} from '../src/constants'

describe('generator', () => {
  it('generates code from AST tree ', () => {
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
    const AST = parse(tokens) // TODO: Pass automatically the AST

    expect(generateCode(AST)).toMatchSnapshot()
  })
})
