import {
  TYPE_DEFINITION,
  ENUM_DEFINITION,
  SCALAR_DEFINITION
} from '../constants'
import { Token } from '../scanner/tokens'

export class Node {
  token: string

  constructor(token: Token) {
    this.token = token.token
  }
}

export class SDL {
  typeDefinitions: Array<Defintion> = []
  enumDefinitions: Array<Defintion> = []
  scalarDefinitions: Array<Defintion> = []

  addDefinition = (definition: Defintion) => {
    switch (definition.getScope()) {
      case TYPE_DEFINITION:
        this.typeDefinitions.push(definition)
        break
      case ENUM_DEFINITION:
        this.enumDefinitions.push(definition)
      case SCALAR_DEFINITION:
        this.scalarDefinitions.push(definition)
      default:
        throw new Error('Unknown definition') // change this error
    }
  }
}

export class Assignment extends Node {
  key: string|undefined
  value: string|undefined
  unique: boolean = false

  constructor(token: Token) {
    super(token)

    this.key = token.value
  }

  setType = (token: Token) => {
    this.value = token.value
  }
}

export class Defintion extends Node {
  scope: string = ''
  name: string|undefined
  assignments: Array<Assignment> = []

  constructor(token: Token) {
    super(token)

    this.scope = token.token
  }

  getScope = () => {
    return this.scope
  }

  setName = (token:Token) => {
    this.name = token.value
  }

  addAssignment = (newAssignment: Assignment) => {
    this.assignments.push(newAssignment)
  }
}
