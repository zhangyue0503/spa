// 模拟一个session
export function sess (options) {
    let sess = options.session || {}

    return function (context, next) {
        context.session = sess
        next()
    }
}
