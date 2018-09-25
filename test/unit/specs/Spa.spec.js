import { spa } from '@/spa.js'

describe('Spa', function () {
    describe('#start', function () {
        it('should be ok to add function to MW', function (done) {
            let test = function (context) {
                expect(context.test).to.equal(1)
            }
            spa.add(test)
            expect(spa.mws.length > 0).to.equal(true)

            let result = spa.dispatch({'test': 1})

            done()
        })
    })
})
