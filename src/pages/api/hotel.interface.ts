export interface HotelReference {
  display_name: string;
  rooms: number;
  starId: number;
  code: string;
}

export interface HotelPerformanceMetrics {
  occ: number;
  adr: number;
  revpar: number;
  total_revenue: number;
  total_hotel_gop: number;
  gop_margin: number;
  total_ebitda: number;
  ebitda_margin: number;
  noi: number;
  noi_margin: number;
  comp_occ: number;
  comp_adr: number;
  comp_revpar: number;
  comp_total_revenue: number;
  comp_total_hotel_gop: number;
  comp_gop_margin: number;
  comp_total_ebitda: number;
  comp_ebitda_margin: number;
  comp_noi: number;
  comp_noi_margin: number;
  pt_chg__occ: number;
  pctchg__adr: number;
  pctchg__revpar: number;
  var__revenue: number;
  var__gop: number;
  pt_chg__gop_margin: number;
  var__ebitda: number;
  pt_chg__ebitda_margin: number;
  var__noi: number;
  pt_chg__noi_margin: number;
  ft_gop: number;
  hotel_reference: HotelReference;
}
