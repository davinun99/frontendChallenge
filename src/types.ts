export type Item = {
  description: string;
  img: string;
  name: string;
  price: number;
  reviews?: {
    id: string;
    text: string;
  }[];
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
export type GraphQLAddReview = {
  addReview: {
    numUids: number
  }
}
