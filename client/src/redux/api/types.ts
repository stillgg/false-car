interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
}

interface Brand {
  id: number;
  brand: string;
}

export type IGetNewCarsResponse = Car[];

export type IGetBrandsResponse = Brand[];
