import { Request, Response, Router } from 'express'
import Posts from '../models/post'

class PostRoutes {
    private router: Router
    constructor(){
        this.router = Router();
        this.routes()

    }

    get pRouter(){
        return this.router
    }
    async getPosts(req: Request, res: Response){
       res.send('Posts')
       console.log('hola')
       const posts = await Posts.find()
     //  res.json(posts)
    }

    getPost(){

    }

    createPost(req: Request, res: Response) {
        //res.send('Posts')
       console.log(req.body)
       //res.json('Recibido.')
       res.json(req.body)
    }

    updatePost(){

    }

    deletePost(){

    }

    routes(){
        // Atención el segundo parámetro es la función
        // representada por el nommbre
        /*
        app.get('/', function(req, res) {
            res.send('hello world');
            });
        */
        this.router.get('/', this.getPosts)
        this.router.get('/:url', this.getPost)
        this.router.post('/', this.createPost)
        this.router.put('/:url', this.updatePost)
        this.router.delete('/:url', this.deletePost)
    }
}

const postRoutes = new PostRoutes()
postRoutes.routes()
export default postRoutes.pRouter