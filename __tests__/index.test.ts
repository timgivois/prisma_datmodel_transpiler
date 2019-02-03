import { transpile } from '../src/'

describe('Transpiler', () => {
  it('transpiles correctly a basic datatmodel', () => {
    const dataModel:string = `type User {
      id : ID

name : String
}`

    expect(transpile(dataModel)).toMatchSnapshot()
  })
})
