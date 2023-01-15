export interface PostModel {
  id: number;
  community: string;
  title: string;
  votes: number;
  comments: number;
  last_posted: number;
  image: string;
}

export interface Meta {
  totalCount: number;
}
