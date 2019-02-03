import { SDL, Defintion, Assignment } from '../parser/nodes'
import { capitalizeFirstLetter } from '../utils'

const defaultCode = `
scalar DateTime

scalar Long

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

`

export const generateCode = (AST: SDL) => {
  let code = `${defaultCode}`

  AST.typeDefinitions.forEach((definition: Defintion) => {
    code = code.concat(generateCodeForType(definition))
  })


  return code
}

const generateCodeForType = (typeDefinition: Defintion):string => {
  const assignmentsCode = typeDefinition.assignments.reduce((lastString, assignment:Assignment):string => {
    return lastString.concat(`
\t${assignment.key}: ${assignment.value}`)}, '')

  const code = `
type ${capitalizeFirstLetter(typeDefinition.name)} implements Node {${assignmentsCode}
}
  `

  return code
}
