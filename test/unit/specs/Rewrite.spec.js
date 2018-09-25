import { rewrite } from '@/middleware/rewrite'

describe('Rewrite', function () {
    describe('#start', function () {
        it('should be ok to Rewrite', function (done) {
            let ctx = {
                request: {
                    pathname: '/user/3'
                }
            }
            let n = function (context) {
                expect(context.request.pathname).to.equal('/user/')
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let r = rewrite({
                rules: [{
                    matcher: /\/group\/[\d]+\/user\/[\d+]\/?/i,
                    target: '/group/'
                },
                {
                    matcher: /\/user\/[\d+]\/?/i,
                    target: '/user/'
                }
                ]})
            let rt = function () {
                return r(ctx, next)
            }
            rt()
        })
    })
})
