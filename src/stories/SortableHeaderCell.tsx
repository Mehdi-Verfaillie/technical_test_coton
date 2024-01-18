import React from "react";
import { FilterIcon } from "@/stories/Filter.icon";
import { Table } from "./Table.layout";
import styled from "styled-components";

interface SortableHeaderCellProps<K> {
  title: string;
  sortKey: K;
  onSort: (key: K) => void;
  isSorted: boolean;
  sortDirection: "asc" | "desc" | null;
}

export const SortableHeaderCell = <K extends string>({
  title,
  sortKey,
  onSort,
  isSorted,
  sortDirection,
}: SortableHeaderCellProps<K>) => {
  const handleClick = () => onSort(sortKey);

  return (
    <Table.Cell>
      <FlexContainer>
        {title}
        <FilterIcon onClick={handleClick} />
      </FlexContainer>
    </Table.Cell>
  );
};

const FlexContainer = styled.div`
  display: flex;
  gap: 0.1rem;
`;
