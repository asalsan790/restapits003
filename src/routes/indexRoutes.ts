import {Request, Response, Router } from 'express'
class IndexRoutes {
    private router: Router
    constructor() {
        this.router = Router()
    }

    get pRouter(){
        return this.router
    }
    routes(){
        this.router.get('/',
            (req, res) => res.send('Api: /api/posts'))
    }
}

const indexRoutes = new IndexRoutes()
indexRoutes.routes()
export default indexRoutes.pRouter