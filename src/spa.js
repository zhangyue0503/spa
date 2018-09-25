export let spa = {
    // 单页调度
    mws: [],
    // 添加中间件
    add: function (mw) {
        if (typeof mw === 'function') {
            this.mws.push(mw)
        }
    },
    // 中间件调度函数
    dispatch: function (context) {
        let index = 0
        var _this = this
        let next = function () {
            let mw = _this.mws[index]
            index++

            if (mw) {
                return mw(context, next)
            }
        }
        next()
    }
}
