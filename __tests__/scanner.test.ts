import { preprocess, scan } from '../src/scanner/'

describe('scanner', () => {
  it('preprocess a dataModel', () => {
    const dataModel:string = ` type  User   {
id:     ID!

  name:  String
  roles: [Roles!]



}`
    expect(preprocess(dataModel)).toMatchSnapshot()
  })

  it('scans a dataModel', () => {
    const dataModel:string = `type User {
id : ID !
name : String
roles : [ Roles ! ]
}`

    expect(scan(dataModel)).toMatchSnapshot()
  })

  it('throws an error when invalid syntax', () => {
    const dataModel:string = `type User (
id : ID !
name : String
roles : [ Roles ! ]
)`


    expect(() => scan(dataModel)).toThrowErrorMatchingSnapshot()
  })
})
