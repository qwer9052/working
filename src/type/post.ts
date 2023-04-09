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
};

export type Comment = {
  commentId: number;
  tbUser: User;
  del: del;
  content: string;
  parentId: number;
  countCommentLike: number;
  creDt: Date;
  children: CommentChildren[];
};

export type CommentChildren = {
  commentId: number;
  tbUser: User;
  del: del;
  countCommentChildrenLike: number;
  content: string;
  parentId: number;
  creDt: Date;
};
