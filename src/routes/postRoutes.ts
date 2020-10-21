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
    private async getPosts(req: Request, res: Response): Promise<void>{
      // res.send('Posts')
       console.log('hola')
       const posts = await Posts.find()
        res.json(posts)
    }

    private async getPost(req: Request, res: Response): Promise<void>{
        console.log(req.params.url)
        // findOne devuelve un solo documento
        // en lugar de un array de un documento
        // que es lo que haría find
        const post = await Posts.findOne({url: req.params.url})
        //res.json('received')
        res.json(post)
    }

    private async createPost(req: Request, res: Response): Promise<void> {
        //res.send('Posts')
       console.log(req.body)
       // Recibimos los valores de cada campo
       // en varias variables
       const { title, url, content, image } = req.body
       //res.json('Recibido.')
       const newPost = new Posts({title, url, content, image})
       console.log(newPost)
       await newPost.save()
       //res.json(req.body)
       res.json({data: newPost})
    }

    private async updatePost(req: Request, res: Response): Promise<void>{
        console.log(req.params.url)
        const { url } = req.params
        console.log(req.body)
        const post = await Posts.findOneAndUpdate( 
            { url }, 
            req.body,
            {new: true}  // para que devuelva el objeto nuevo, actualizado
            )
        // recibo en la instrucción anterior el dato actualizado
        // lo reenvío
        res.json(post)
    }

    private async deletePost(req: Request, res: Response): Promise<void>{
        const { url } = req.params
        await Posts.findOneAndDelete({url})
        res.json({ response: 'Post deleted successfully'})
    }

    routes(): void{
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
        // En la actualización se puede usar put o post
        this.router.put('/:url', this.updatePost)
        this.router.delete('/:url', this.deletePost)
    }
}

const postRoutes = new PostRoutes()
postRoutes.routes()
export default postRoutes.pRouter