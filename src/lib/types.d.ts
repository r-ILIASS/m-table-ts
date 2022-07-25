export interface GenreType {
  _id: string;
  name: string;
}

export interface MovieType {
  _id: string;
  title: string;
  genre: GenreType;
  numberInStock: number;
  dailyRentalRate: number;
  isLiked: boolean;
}
