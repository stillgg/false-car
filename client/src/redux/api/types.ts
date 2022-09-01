interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
}

export type IGetNewCarsResponse = Car[];
