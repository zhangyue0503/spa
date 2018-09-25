import { AuthFilter } from '@/filter/auth.js'
import { filter } from '@/middleware/filter.js'

describe('AuthFilter', function () {
    describe('#start', function () {
        it('should be ok to AuthFilter', function (done) {
            let ctx = {
                session: {
                    user: {
                        id: 1
                    }
                }
            }
            let next = function (context) {
                expect(context.session.user.id).to.equal(ctx.session.user.id)
                done()
            }

            filter.add(AuthFilter)

            expect(filter.filters.length > 0).to.equal(true)

            filter.mw(ctx, next(ctx))
        })
    })
})
