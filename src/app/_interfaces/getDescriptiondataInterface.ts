export interface getDescriptionData {
  results: {
    shop: {
      id: string;
      photo: {
        pc?: {
          l: string;
        };
      };
      name: string;
      address: string;
      open: string;
    }[];
  };
}
