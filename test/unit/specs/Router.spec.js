import { router } from '@/middleware/router'
import { User } from '@/module/user'
import { Group } from '@/module/group'
describe('Router', function () {
    describe('#start', function () {
        it('should be ok to Router User', function (done) {
            let ctx = {
                request: {
                    pathname: '/user/',
                    restParams: {
                        id: '3'
                    }
                }
            }

            let n = function (context) {
                expect(document.body.innerHTML).to.has.string('<p>大家好，我是用户3</p>')
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let r = router({
                router: {
                    '/user/': User
                },
                parent: document.body
            })
            let rt = function () {
                return r(ctx, next)
            }
            rt()
        })

        it('should be ok to Router Group', function (done) {
            let ctx = {
                request: {
                    pathname: '/group/',
                    restParams: {
                        gid: '3',
                        uid: '4'
                    }
                }
            }

            let n = function (context) {
                expect(document.body.innerHTML).to.has.string('<p>大家好，我是组3，用户4</p>')
                done()
            }

            let next = function () {
                return n(ctx, next)
            }
            let r = router({
                router: {
                    '/group/': Group
                },
                parent: document.body
            })
            let rt = function () {
                return r(ctx, next)
            }
            rt()
        })
    })
})
