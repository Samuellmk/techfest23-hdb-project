export interface PostModel {
  id: number;
  community: string;
  title: string;
  username: string;
  votes: number;
  description: string;
  comments: CommentModel[];
  time: number;
  image: string;
}

export interface CommentModel {
  username: string;
  time: number;
  text: string;
}

export interface Meta {
  totalCount: number;
}
