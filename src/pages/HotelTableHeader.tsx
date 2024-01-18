import { SortableHeaderCell } from "@/stories/SortableHeaderCell";
import { HotelSummaryMetrics } from "./api/hotel.normalizer";
import { Table } from "@/stories/Table.layout";

export type Column = {
  title: string;
  sortKey: keyof HotelSummaryMetrics;
};

export const columns: Column[] = [
  { title: "Hotel Name", sortKey: "hotelName" },
  { title: "Rooms", sortKey: "rooms" },
  { title: "Occ (%)", sortKey: "occ" },
  { title: "ADR ($)", sortKey: "adr" },
  { title: "RevPar ($)", sortKey: "revpar" },
  { title: "Total Rev ($)", sortKey: "total_revenue" },
  { title: "GOP ($)", sortKey: "total_hotel_gop" },
  { title: "GOP Margin (%)", sortKey: "gop_margin" },
  { title: "EBITDA ($)", sortKey: "total_ebitda" },
  { title: "EBITDA Margin (%)", sortKey: "ebitda_margin" },
  { title: "NOI ($)", sortKey: "noi" },
  { title: "NOI Margin (%)", sortKey: "noi_margin" },
];

interface HotelTableHeaderProps {
  columns: Column[];
  handleSort: (key: keyof HotelSummaryMetrics) => void;
  sortKey: keyof HotelSummaryMetrics | null;
  sortDirection: "asc" | "desc" | null;
}

export const HotelTableHeader = ({
  columns,
  handleSort,
  sortKey,
  sortDirection,
}: HotelTableHeaderProps) => (
  <Table.Header>
    <Table.Cell>Index</Table.Cell>
    {columns.map((column) => (
      <SortableHeaderCell
        key={column.sortKey}
        title={column.title}
        sortKey={column.sortKey}
        onSort={handleSort}
        isSorted={sortKey === column.sortKey}
        sortDirection={sortKey === column.sortKey ? sortDirection : null}
      />
    ))}
  </Table.Header>
);
