export type Item = {
  description: string;
  img: string;
  name: string;
  price: number;
}

export type ReviewItem = {
  id: string;
  text: string;
  item?: Item;
}
export type GraphQlReview = {
  queryReview: ReviewItem[];
};
export type GraphQlItem = {
  queryItem: Item[];
}
