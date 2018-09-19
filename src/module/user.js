// const Module = require('./module.js')
import { Module } from './module'
class User extends Module {
    build (options) {
        super.build(options)
        this._body = document.createElement('div')
        this._unode = document.createElement('p')
        this._body.appendChild(this._unode)
    }

    show (context) {
        super.show(context)
        let req = context.request
        this._doUpdateUser(req.restParams.id)
    }

    refresh (context) {
        super.refresh(context)
        let req = context.request
        this._doUpdateUser(req.restParams.id)
    }

    _doUpdateUser (uid) {
        this._unode.innerHTML = '<p>大家好，我是用户' + uid + '</p>'
    }
}
