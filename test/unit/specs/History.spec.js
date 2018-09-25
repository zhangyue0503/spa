import { hist } from '@/middleware/history.js'

describe('History', function () {
    describe('#start', function () {
        it('should be ok to History', function (done) {
            let ctx = {
                request: {
                    hash: '/aa/bb/cc'
                }
            }

            let n = function (context) {
                expect(context.request.hash).to.equal(ctx.request.hash)
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let h = hist()
            let ht = function () {
                return h(ctx, next)
            }
            ht()
        })
    })
})
