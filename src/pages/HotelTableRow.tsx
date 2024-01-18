import { Table } from "@/stories/Table.layout";
import { HotelSummaryMetrics } from "./api/hotel.normalizer";
import {
  formatNumber,
  formatCurrency,
  formatPercentage,
} from "@/utils/formatters";

interface TableRowComponentProps {
  hotel: HotelSummaryMetrics;
}

export const HotelTableRow = ({ hotel }: TableRowComponentProps) => {
  const renderCell = (content: string | number | null | undefined) => {
    if (content === null || content === undefined || content === "") {
      return <Table.EmptyCell />;
    }
    return content;
  };

  return (
    <Table.Row>
      <Table.Cell>{hotel.index}</Table.Cell>
      <Table.Cell>{renderCell(hotel.hotelName)}</Table.Cell>
      <Table.Cell>{renderCell(formatNumber(hotel.rooms))}</Table.Cell>
      <Table.Cell>{renderCell(formatPercentage(hotel.occ))}</Table.Cell>
      <Table.Cell>{renderCell(formatCurrency(hotel.adr))}</Table.Cell>
      <Table.Cell>{renderCell(formatCurrency(hotel.revpar))}</Table.Cell>
      <Table.Cell>{renderCell(formatCurrency(hotel.total_revenue))}</Table.Cell>
      <Table.Cell>
        {renderCell(formatCurrency(hotel.total_hotel_gop))}
      </Table.Cell>
      <Table.Cell>{renderCell(formatPercentage(hotel.gop_margin))}</Table.Cell>
      <Table.Cell>{renderCell(formatCurrency(hotel.total_ebitda))}</Table.Cell>
      <Table.Cell>
        {renderCell(formatPercentage(hotel.ebitda_margin))}
      </Table.Cell>
      <Table.Cell>{renderCell(formatCurrency(hotel.noi))}</Table.Cell>
      <Table.Cell>{renderCell(formatPercentage(hotel.noi_margin))}</Table.Cell>
    </Table.Row>
  );
};
