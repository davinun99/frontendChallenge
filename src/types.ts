export type Item = {
  description: string;
  img: string;
  name: string;
  price: number;
}
export type Review = {
  id: string;
  text: string;
  item?: Item;
}
export type GraphQlReview = {
  queryReview: Review[];
};
export type GraphQlItem = {
  queryItem: Item[];
}
export type GraphQLAddProduct = {
  addItem: {
    numUids: number
  }
}
