export interface hotpepperGetData {
  results: {
    shop: {
      id: string;
      name: string;
      access: string;
      logo_image: string;
      budget: {
        average: string;
      };
    }[];
  };
}
