import { del, postType } from './enum';
import { User } from './user';

export type Post = {
  postId: number;
  title: string;
  content: string;
  creDt: string;
  postType: postType;
  del: del;
  tbUser: User;
  comments: Comment[];
};

export type Comment = {
  commentId: number;
  tbUser: User;
  del: del;
  content: string;
  parentId: number;
  creDt: string;
  children: CommentChildren[];
};

export type CommentChildren = {
  commentId: number;
  tbUser: User;
  del: del;
  content: string;
  parentId: number;
  creDt: string;
};
