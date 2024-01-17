import { Table } from "@/stories/Table.layout";
import { useHotelContext } from "./api/hotel.provider";
import { FilterIcon } from "@/stories/Filter.icon";
import {
  formatNumber,
  formatCurrency,
  formatPercentage,
} from "@/utils/formatters";
import { useColumnSort } from "@/hooks/useColumnSort";
import { SortableHeaderCell } from "@/stories/SortableHeaderCell";
import { HotelSummaryMetrics } from "./api/hotel.normalizer";

type Column = {
  title: string;
  sortKey: keyof HotelSummaryMetrics;
};

const columns: Column[] = [
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

export const HotelTable = () => {
  const { hotelPerformanceMetrics } = useHotelContext();
  const { sortedItems, handleSort, sortKey, sortDirection } = useColumnSort<
    HotelSummaryMetrics,
    keyof HotelSummaryMetrics
  >({
    items: hotelPerformanceMetrics ?? [],
    initialSortKey: null,
  });

  const renderCell = (content: string | number | null | undefined) => {
    if (content === null || content === undefined || content === "") {
      return <Table.EmptyCell />;
    }
    return content;
  };

  return (
    <Table>
      <Table.Header>
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
      <Table.Body>
        {sortedItems &&
          sortedItems.map((hotel, index) => (
            <Table.Row key={index}>
              <Table.Cell>{renderCell(hotel.hotelName)}</Table.Cell>
              <Table.Cell>{renderCell(formatNumber(hotel.rooms))}</Table.Cell>
              <Table.Cell>{renderCell(formatPercentage(hotel.occ))}</Table.Cell>
              <Table.Cell>{renderCell(formatCurrency(hotel.adr))}</Table.Cell>
              <Table.Cell>
                {renderCell(formatCurrency(hotel.revpar))}
              </Table.Cell>
              <Table.Cell>
                {renderCell(formatCurrency(hotel.total_revenue))}
              </Table.Cell>
              <Table.Cell>
                {renderCell(formatCurrency(hotel.total_hotel_gop))}
              </Table.Cell>
              <Table.Cell>
                {renderCell(formatPercentage(hotel.gop_margin))}
              </Table.Cell>
              <Table.Cell>
                {renderCell(formatCurrency(hotel.total_ebitda))}
              </Table.Cell>
              <Table.Cell>
                {renderCell(formatPercentage(hotel.ebitda_margin))}
              </Table.Cell>
              <Table.Cell>{renderCell(formatCurrency(hotel.noi))}</Table.Cell>
              <Table.Cell>
                {renderCell(formatPercentage(hotel.noi_margin))}
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};
