// import Factory from '@ioc:Adonis/Lucid/Factory'

import Post from 'App/Models/Post'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.text(),
  }
}).build()
