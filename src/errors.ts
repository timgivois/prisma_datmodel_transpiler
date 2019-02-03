export class ParseError extends Error {
  constructor(message:string='' ,...args:any) {
    super(...args)
    this.name = 'ParseError'
    this.message = message
  }
}

export class SyntaxError extends Error {
  constructor(message:string='' ,...args:any) {
    super(...args)
    this.name = 'SyntaxError'
    this.message = message
  }
}
