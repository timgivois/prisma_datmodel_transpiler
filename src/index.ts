import * as fs from 'fs'

import { preprocess, scan } from './scanner'
import { Token } from './scanner/tokens'
import { hasValidGrammar, parse } from './parser'
import { generateCode } from './generator'
import { SyntaxError } from './errors'

export const transpile = (dataModel:string):string =>{
  const tokens:Array<Token> = scan(preprocess(dataModel))

  if (!hasValidGrammar(tokens)) {
    throw new SyntaxError('Invalid Syntax')
  }

  const AST = parse(tokens)

  return generateCode(AST)
}
