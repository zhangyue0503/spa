export let filter = {
    filters: [],
    add: function (ft) {
        if (ft instanceof Array) {
            ft.forEach(function (it) {
                this.filters.add(it)
            })
            return
        }
        this.filters.push(ft)
    },
    mw: function (context, next) {
        let index = 0
        let _this = this
        let chain = function () {
            let Filter = _this.filters[index++]
            if (Filter) {
                let ft = new Filter(
                    context,
                    next,
                    chain
                )
                ft.doFilter()
            } else {
                next()
            }
        }
        chain()
    }
}
