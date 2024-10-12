export type TBike = {
  id: string;
  _id?: string;
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  isAvailable?: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
};
export type TRental = {
  _id?: string;
  userId?: string;
  bikeId: string;
  startTime: string;
  returnTime?: string | null;
  totalCost?: number;
  isReturned?: boolean;
  isPaid?: boolean;
};

export interface IUser {
  _id?: string;
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  active: boolean;
}
