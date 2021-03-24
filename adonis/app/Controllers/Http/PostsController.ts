import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index (ctx: HttpContextContract) {
    const posts = await Post.all()
    return ctx.view.render('posts/index', { posts })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show (ctx: HttpContextContract) {
    const post = await Post.query().preload('comments').where('id', ctx.params.id).firstOrFail()
    return ctx.view.render('posts/show', { post })
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
