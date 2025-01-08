export interface hotpepperGetData {
  results: {
    results_available: number;
    results_returned: string;
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
