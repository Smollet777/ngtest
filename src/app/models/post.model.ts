import { PostInterface } from '../interfaces/post.interface';

export class Post implements PostInterface {

  constructor(
    public id: number,
    public title: string,
    public body: string,
    public userId: number
  ) { }
}
