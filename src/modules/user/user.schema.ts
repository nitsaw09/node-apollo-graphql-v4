import { ObjectType, Field, Int } from 'type-graphql';
import Post from '../post/post.schema';

@ObjectType()
export default class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
  
  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Date)
  deletedAt?: Date;

  posts?: Post[]
}
