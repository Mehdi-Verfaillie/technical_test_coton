import { HotelPerformanceMetrics } from "./hotel.interface";

export type HotelSummaryMetrics = Pick<
  HotelPerformanceMetrics,
  | "occ"
  | "adr"
  | "revpar"
  | "total_revenue"
  | "total_hotel_gop"
  | "gop_margin"
  | "total_ebitda"
  | "ebitda_margin"
  | "noi"
  | "noi_margin"
> & {
  hotelName: HotelPerformanceMetrics["hotel_reference"]["display_name"];
  rooms: HotelPerformanceMetrics["hotel_reference"]["rooms"];
  index: number;
};

export const normalizeHotelPerformanceMetrics = (
  metrics: HotelPerformanceMetrics[],
): HotelSummaryMetrics[] => {
  return metrics.map((metric, index) => ({
    index,
    occ: metric.occ,
    adr: metric.adr,
    revpar: metric.revpar,
    total_revenue: metric.total_revenue,
    total_hotel_gop: metric.total_hotel_gop,
    gop_margin: metric.gop_margin,
    total_ebitda: metric.total_ebitda,
    ebitda_margin: metric.ebitda_margin,
    noi: metric.noi,
    noi_margin: metric.noi_margin,
    hotelName: metric.hotel_reference.display_name,
    rooms: metric.hotel_reference.rooms,
  }));
};
