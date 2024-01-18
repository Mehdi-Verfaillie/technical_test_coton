import { httpService } from "@/contracts/httpService";
import { HotelPerformanceMetrics } from "./hotel.interface";

export const getHotelPerformanceMetrics = async () =>
  await httpService.getRequest<HotelPerformanceMetrics[]>(
    "https://api.coton.dev/finance",
  );
