const Module = require('../module/module')

function router (options) {
    let routes = options.router || {}
    let current = null

    return function (context, next) {
        console.log(context)
        let name = context.request.pathname
        let Lmodule = routes[name]
        if (!Lmodule) {
            // redirect('/404');
            // return;
            console.log('页面404')
            return
        }
        if (!(Lmodule instanceof Module)) {
            Lmodule = new Lmodule(options)
            routes[name] = Lmodule
            Lmodule.build(context)
        }
        if (Lmodule === current) {
            Lmodule.refresh(context)
        } else {
            if (current) {
                current.hide()
            }
            current = Lmodule
            current.show(context)
        }
        next()
    }
}
