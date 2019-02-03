import tokens, { variableRegex, variableToken, Token, Tokens } from './tokens';
import { ParseError } from '../errors'

interface replacable {
  regex: RegExp,
  by: string
}

const replaceMap:Array<replacable> = [
  {
    regex: new RegExp(/\n\n+/, 'g'),
    by: '\n'
  },
  {
    regex: new RegExp(/:/, 'g'),
    by: ' : '
  },{
    regex: new RegExp(/\[/, 'g'),
    by: ' [ '
  }, {
    regex: new RegExp(/\]/, 'g'),
    by: ' ] '
  }, {
    regex: new RegExp(/!/, 'g'),
    by: ' ! '
  },{
    regex: new RegExp(/  +/, 'gm'),
    by: ' '
  },{
    regex: new RegExp(/^ +| +$/, 'gm'),
    by: ''
  }
]

const preprocess = (dataModel: string) => {
  return replaceMap.reduce((procesedDM:string, pipeline:replacable):string => {
    return procesedDM.replace(pipeline.regex, pipeline.by)
  }, dataModel)
}

const scan = (dataModel: string) => {
  const delimiter = new RegExp(/\s+/, 'g')
  const splittedDM:Array<string> = dataModel.split(delimiter)
  const parsedDM:Array<Token> = []

  splittedDM.forEach(word => {
    if (tokens[word as keyof Tokens] ) {
      parsedDM.push(tokens[word as keyof Tokens])
    } else if (word.match(variableRegex)) {
      parsedDM.push(variableToken(word))
    } else {
      throw new ParseError(`Unrecognized character: ${word}`)
    }
  })

  return parsedDM
}

export {
  preprocess,
  scan
}
