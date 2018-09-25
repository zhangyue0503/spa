import { Monitor } from '@/monitor.js'

describe('SpaMonitor', function () {
    describe('#start', function () {
        it('should be ok to start monitor', function (done) {
            let href = 'http://localhost/#spa/11'
            let inst = new Monitor({
                'href': href,
                'onchange': function (event) {
                    expect(event.oldValue).to.equal(null)
                    expect(event.newValue).to.equal(href)
                    done()
                }
            })
        })
    })
})
