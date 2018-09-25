import { rest } from '@/middleware/rest.js'

describe('Rest', function () {
    describe('#start', function () {
        it('should be ok to Rest', function (done) {
            let ctx = {
                request: {
                    pathname: '/user/3'
                }
            }
            let n = function (context) {
                expect(context.request.restParams.id).to.equal('3')
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let r = rest({
                matchers: [
                    '/user/:id',
                    '/group/:gid/user/:uid'
                ]})
            let rt = function () {
                return r(ctx, next)
            }
            rt()
        })
    })
})
