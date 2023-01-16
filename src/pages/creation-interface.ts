export interface PBCommentModel {
  id: string;
  username: string;
  text: string;
  created: Date;
  updated: Date;
}

export interface PBPostModel {
  id: string;
  community: string;
  title: string;
  username: string;
  votes: number;
  description: string;
  comments: string[];
  time: number;
  imagelink: string;
  image: string;
  created: Date;
  updated: Date;
}
