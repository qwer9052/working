import { del, postType } from './enum';
import { User } from './user';

export type Post = {
  postId: number;
  title: string;
  content: string;
  creDt: Date;
  postType: postType;
  del: del;
  tbUser: User;
  countPostLike: number;
  comments: Comment[];
  like: boolean;
};

export type Comment = {
  commentId: number;
  tbUser: User;
  del: del;
  content: string;
  parentId: number;
  creDt: Date;
  children: CommentChildren[];
  countCommentLike: number;
  like: boolean;
};

export type CommentChildren = {
  commentId: number;
  tbUser: User;
  del: del;
  countCommentChildrenLike: number;
  like: boolean;
  content: string;
  parentId: number;
  creDt: Date;
};
