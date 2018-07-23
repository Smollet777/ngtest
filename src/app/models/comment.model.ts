import { CommentInterface } from '../interfaces/comment.interface';

export class Comment implements CommentInterface {

  constructor(public postId: number,
    public id: number,
    public name: string,
    public email: string,
    public body: string) { }
}
