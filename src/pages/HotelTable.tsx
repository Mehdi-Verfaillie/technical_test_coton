// HotelTable.tsx
import { Table } from "@/stories/Table.layout";
import { useHotelContext } from "./api/hotel.provider";
import { useColumnSort } from "@/hooks/useColumnSort";
import { HotelSummaryMetrics } from "./api/hotel.normalizer";
import { HotelTableHeader, columns } from "./HotelTableHeader";
import { HotelTableRow } from "./HotelTableRow";
import { AverageMetrics, HotelTableFooter } from "./HotelTableFooter";
import { calculateAverage } from "@/utils/formatters";

export const HotelTable = () => {
  const { hotelPerformanceMetrics } = useHotelContext();
  const { sortedItems, handleSort, sortKey, sortDirection } = useColumnSort<
    HotelSummaryMetrics,
    keyof HotelSummaryMetrics
  >({
    items: hotelPerformanceMetrics ?? [],
    initialSortKey: null,
  });

  const averageMetrics = columns.reduce((acc, column) => {
    if (column.sortKey && column.sortKey !== "hotelName") {
      acc[column.sortKey] = calculateAverage(sortedItems, column.sortKey);
      return acc;
    }
    return acc;
  }, {} as AverageMetrics);

  return (
    <Table>
      <HotelTableHeader
        columns={columns}
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />
      <Table.Body>
        {sortedItems.map((hotel, index) => (
          <HotelTableRow key={index} hotel={hotel} />
        ))}
        <HotelTableFooter averageMetrics={averageMetrics} columns={columns} />
      </Table.Body>
    </Table>
  );
};
