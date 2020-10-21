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
      // res.send('Posts')
       console.log('hola')
       const posts = await Posts.find()
        res.json(posts)
    }

    async getPost(req: Request, res: Response){
        console.log(req.params.url)
        // findOne devuelve un solo documento
        // en lugar de un array de un documento
        // que es lo que haría find
        const post = await Posts.findOne({url: req.params.url})
        //res.json('received')
        res.json(post)
    }

    async createPost(req: Request, res: Response) {
        //res.send('Posts')
       console.log(req.body)
       // Recibimos los valores de cada campo
       // en varias variables
       const {title, url, content, image } = req.body
       //res.json('Recibido.')
       const newPost = new Posts({title, url, content, image})
       console.log(newPost)
       await newPost.save()
       //res.json(req.body)
       res.json({data: newPost})
    }

    async updatePost(req: Request, res: Response, ){
        console.log(req.params.url)
        console.log(req.body)
        //await Posts.findOneAndUpdate()
       res.json('received')
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