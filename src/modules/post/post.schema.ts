import { ObjectType, Field, Int } from 'type-graphql';
import User from '../user/user.schema';

@ObjectType()
export default class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string
  
  @Field(() => String)
  content: string
  
  @Field(() => Int)
  authorId: number
  
  @Field(() => Boolean, { defaultValue: false })
  published: boolean
  
  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date)
  deletedAt?: Date;

  author?: User
}
