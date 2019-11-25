import { getId } from './Utilities'

describe('Unit test for Utilities helper', () => {
  it('- should check get id post', () => {
    expect(getId('id=cjyprtla10cg90165my7oxwr0')).toEqual('cjyprtla10cg90165my7oxwr0')
  })
})
