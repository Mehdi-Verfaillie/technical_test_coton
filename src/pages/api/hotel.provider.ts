import { createStoreContext } from "@/utils/createStoreContext";
import * as api from "./hotel.api";
import { useQuery } from "react-query";
import { normalizeHotelPerformanceMetrics } from "./hotel.normalizer";

type Repository = Pick<typeof api, "getHotelPerformanceMetrics">;

export const useHotelStore = (
  hotelId?: string,
  repository: Repository = api
) => {
  const {
    data: hotelPerformanceMetrics,
    status,
    error,
  } = useQuery(
    "hotelMetrics",
    async () =>
      normalizeHotelPerformanceMetrics(
        await repository.getHotelPerformanceMetrics()
      ),
    { suspense: true, useErrorBoundary: true }
  );

  return { hotelPerformanceMetrics, status, error };
};

const { StoreProvider, useStore } = createStoreContext(useHotelStore);

export const HotelStoreProvider = StoreProvider;
export const useHotelContext = useStore;
