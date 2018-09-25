import { sess } from '@/middleware/session'

describe('Session', function () {
    describe('#start', function () {
        it('should be ok to Session', function (done) {
            let ctx = {}
            let n = function (context) {
                expect(context.session).to.equal('1')
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let s = sess({
                session: '1'
            })
            let st = function () {
                return s(ctx, next)
            }
            st()
        })
    })
})
