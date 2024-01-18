import { Table } from "@/stories/Table.layout";
import { HotelSummaryMetrics } from "./api/hotel.normalizer";
import { formatCurrency, formatPercentage } from "@/utils/formatters";
import { Column } from "./HotelTableHeader";

export type AverageMetrics = {
  [K in keyof HotelSummaryMetrics]?: string;
};

interface TableFooterComponentProps {
  averageMetrics: AverageMetrics;
  columns: Column[];
}

export const HotelTableFooter = ({
  averageMetrics,
  columns,
}: TableFooterComponentProps) => {
  const renderCell = (
    content: string | number | null | undefined,
    isPercentage = false,
  ) => {
    if (content === null || content === undefined || content === "") {
      return <Table.EmptyCell />;
    }
    return isPercentage
      ? formatPercentage(parseFloat(content as string))
      : formatCurrency(parseFloat(content as string));
  };

  return (
    <Table.Row>
      <Table.Cell>Averages --&gt;</Table.Cell>
      {columns.map((column) => (
        <Table.Cell key={column.sortKey}>
          {column.sortKey === "hotelName" ? (
            <Table.Cell />
          ) : (
            renderCell(
              averageMetrics[column.sortKey],
              column.sortKey.includes("margin") || column.sortKey === "occ",
            )
          )}
        </Table.Cell>
      ))}
    </Table.Row>
  );
};
