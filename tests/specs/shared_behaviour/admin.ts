import { shared } from './user'

describe.skip('Admin', function () {

    it('can do some admin stuff', function () {
        console.log('admin')
        //...
    })

    shared({ username: 'Admin' })
})