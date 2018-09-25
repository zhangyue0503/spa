import { AuthFilter } from './filter/auth'
const spa = require('./spa').spa
const Monitor = require('./monitor').Monitor
const sess = require('./middleware/session').sess
const rest = require('./middleware/rest').rest
const hist = require('./middleware/history').hist
const rewrite = require('./middleware/rewrite').rewrite
const router = require('./middleware/router').router
const filter = require('./middleware/filter').filter
// const AuthFilter = require('./filter/auth')

let User = require('./module/user')
let Group = require('./module/group')

let app = {
    start: function (options) {
        spa.add(sess(options))
        spa.add(rest(options))
        spa.add(hist())
        spa.add(rewrite(options))
        filter.add(AuthFilter)
        spa.add(filter.mw)
        spa.add(router(options))

        Monitor({
            onchange: function (event) {
                let context = {
                    request: new URL(event.newValue)
                }
                spa.dispatch(context)
            }
        })
    }
}

// app.start({
//     matchers: [
//         '/user/:id',
//         '/group/:gid/user/:uid'
//     ],
//     rules: [{
//         matcher: /\/group\/[\d]+\/user\/[\d+]\/?/i,
//         target: '/group/'
//     },
//     {
//         matcher: /\/user\/[\d+]\/?/i,
//         target: '/user/'
//     }
//     ],
//     router: {
//         '/user/': User,
//         '/group/': Group
//     },
//     parent: document.body,
//     session: {
//         user: {
//             id: 1
//         }
//     }
// })
