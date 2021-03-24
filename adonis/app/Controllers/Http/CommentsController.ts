import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CommentsController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({}: HttpContextContract) {
  }

  public async store (ctx: HttpContextContract) {
    const post = await Post.findOrFail(ctx.params.post_id)

    const data = await ctx.request.validate({
      schema: schema.create({
        body: schema.string(),
      }),
    })

    await post.related('comments').create(data)

    return ctx.response.redirect().back()
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
