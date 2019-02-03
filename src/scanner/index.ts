import tokens, { variableRegex, variableToken, Token, Tokens } from './tokens';
import { ParseError } from '../errors'

const preprocess = (dataModel: string) => {
  // TODO: Refactor this shit haha
  const extraEnters = new RegExp(/\n\n+/, 'g')
  const extraSpaces = new RegExp(/  +/, 'gm')
  const trimSpaces = new RegExp(/^ +| +$/, 'gm')
  const equality = new RegExp(/:/, 'g')
  const openBraces = new RegExp(/\[/, 'g')
  const closeBraces = new RegExp(/\]/, 'g')
  const exclamation = new RegExp(/!/, 'g')

  const withoutExtraEnters = dataModel.replace(extraEnters, '\n')
  const withEqualitySpaces = withoutExtraEnters.replace(equality, ' : ')
  const withBracesSpaces = withEqualitySpaces.replace(openBraces, ' [ ').replace(closeBraces, ' ] ')
  const withExclammationSpaces = withBracesSpaces.replace(exclamation, ' ! ')
  const withoutExtraSpaces = withExclammationSpaces.replace(extraSpaces, ' ')
  const withTrimedSpaces = withoutExtraSpaces.replace(trimSpaces, '')


  return withTrimedSpaces
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
