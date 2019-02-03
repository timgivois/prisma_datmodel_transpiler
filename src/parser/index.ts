import { Token } from '../scanner/tokens'
import { DONE, IN_LOOP } from '../constants'
import grammar from './grammar'
import { SDL, Assignment, Defintion } from './nodes'
import {
  TYPE_DEFINITION,
  ENUM_DEFINITION,
  SCALAR_DEFINITION,
  CLOSE_BRACES,
  OPEN_BRACES,
  VARIABLE,
  EQUAL
} from '../constants'

export const hasValidGrammar = (tokens: Array<Token>):boolean => {
  let context:any = grammar
  let valid:boolean = false
  let loops:number = 0
  let outsideLoop:any = {}

  tokens.forEach((each:Token) => {
    if (context[each.token] === DONE) {
      if (loops === 0) {
        valid = true
        context = grammar
      } else {
        loops = loops - 1
        context = outsideLoop
      }

    } else if (context[IN_LOOP] && context[IN_LOOP][each.token]) {
      outsideLoop = context
      loops = loops + 1
      context = context[IN_LOOP][each.token]
      valid = false

    } else if (context[each.token]) {
      context = context[each.token]
      valid = false

    } else {
      throw new Error(`Syntax error: ${each.token}`)
    }
  })

  return valid
}


export const parse = (tokens: Array<Token>):SDL => {
  const AST = new SDL()
  let actualDefinition:Defintion|null = null
  let actualAssignment:Assignment|null = null
  let insideDefinition:boolean = false
  let isAssignment:boolean = false

  tokens.forEach(each => {
    if (each.token === TYPE_DEFINITION || each.token === ENUM_DEFINITION || each.token === SCALAR_DEFINITION) {
      actualDefinition = new Defintion(each)

    } else if (each.token === CLOSE_BRACES && actualDefinition) {
      if (actualAssignment) {
        actualDefinition.addAssignment(actualAssignment)
      }

      AST.addDefinition(actualDefinition)
      insideDefinition = false

    } else if (each.token === OPEN_BRACES) {
      insideDefinition = true

    } else if (each.token === VARIABLE && actualDefinition) {
      if (insideDefinition) {
        if (actualAssignment) {
          actualDefinition.addAssignment(actualAssignment)
        }
        actualAssignment = new Assignment(each)
      } else {
        actualDefinition.setName(each)

      }

    } else if (each.token === EQUAL) {
      isAssignment = true

    } else if (isAssignment && actualAssignment) {
      isAssignment = false
      actualAssignment.setType(each)

    }
  })

  return AST
}
