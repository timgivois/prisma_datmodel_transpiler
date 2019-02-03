import {
  TYPE_DEFINITION,
  OPEN_BRACES,
  CLOSE_BRACES,
  EQUAL,
  TYPE,
  ID,
  DATETIME,
  STRING,
  BOOLEAN,
  FLOAT,
  INT,
  ENUM_DEFINITION,
  IS_REQUIRED,
  OPEN_BRACKETS,
  CLOSE_BRACKETS,
  IS_UNIQUE,
  SCALAR_DEFINITION,
  VARIABLE
} from '../constants'

export interface Token {
  token: string,
  value?: string
}

export interface Tokens {
  'type': Token,
  '{': Token,
  '}': Token,
  ':': Token,
  'ID': Token,
  'DateTime': Token,
  'String': Token,
  'Boolean': Token,
  'Float': Token,
  'Int': Token,
  'enum': Token,
  '!': Token,
  '[': Token,
  ']': Token,
  '@unique': Token,
  'scalar': Token
}

const tokens:Tokens = {
  'type': {
    token: TYPE_DEFINITION
  },
  '{': {
    token: OPEN_BRACES
  },
  '}': {
    token: CLOSE_BRACES
  },
  ':': {
    token: EQUAL
  },
  'ID': {
    token: TYPE,
    value: ID
  },
  'DateTime': {
    token: TYPE,
    value: DATETIME
  },
  'String': {
    token: TYPE,
    value: STRING
  },
  'Boolean': {
    token: TYPE,
    value: BOOLEAN
  },
  'Float': {
    token: TYPE,
    value: FLOAT
  },
  'Int': {
    token: TYPE,
    value: INT
  },
  'enum': {
    token: ENUM_DEFINITION
  },
  '!': {
    token: IS_REQUIRED
  },
  '[': {
    token: OPEN_BRACKETS
  },
  ']': {
    token: CLOSE_BRACKETS
  },
  '@unique': {
    token: IS_UNIQUE
  },
  'scalar': {
    token: SCALAR_DEFINITION
  }
}

export const variableRegex:RegExp = /^\w+$/
export const variableToken = function(value: string): Token {
  return {
    token: VARIABLE,
    value
  }
}



export default tokens
