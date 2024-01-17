import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Table = ({ children }: PropsWithChildren) => {
  return (
    <TableWrapper>
      <TableContent>{children}</TableContent>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  overflow-wrap: break-word;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  padding: 0.5rem 0.25rem;
  border-radius: 0.5rem;
  box-shadow: #ffffff;
`;

const TableContent = styled.table`
  display: table;
  background-color: transparent;
  align-items: center;
  width: 100%;
  border-collapse: collapse;
`;

const Header = ({ children }: PropsWithChildren) => {
  return (
    <StyledTableHeader>
      <Table.Row>{children}</Table.Row>
    </StyledTableHeader>
  );
};
Table.Header = Header;
const StyledTableHeader = styled.thead`
  display: table-header-group;
  font-size: 0.875rem;
  font-weight: 800;
  user-select: none;
  tr {
    height: 2rem;
    td {
      padding-bottom: 0.25rem;
    }
  }
`;

const Body = ({ children }: PropsWithChildren) => {
  return <StyledBody>{children}</StyledBody>;
};
Table.Body = Body;
const StyledBody = styled.tbody`
  display: table-row-group;
  font-size: 0.775rem;
  tr {
    height: 3rem;
    cursor: pointer;
    background-color: transparent;
    z-index: 1;
    td:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
      &:before,
      &:after {
        position: absolute;
        display: block;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
      }
      &:before {
        background-color: transparent;
        mix-blend-mode: multiply;
        transition: all 0.125s ease-out;
        border-radius: 0.25rem;
      }
      &:after {
        left: 0.25rem;
        right: 0.25rem;
        border-top: 0.5px solid #e7e7e7;
      }
    }
    td:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
    &:nth-child(odd) {
      background: transparent;
    }
    &:hover {
      td:first-child:before {
        background-color: firebrick;
      }
    }
  }
`;

const Row = ({ children }: PropsWithChildren) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};
Table.Row = Row;
const StyledTableRow = styled.tr`
  display: table-row;
  position: relative;
`;

const Cell = ({ children }: PropsWithChildren) => {
  return (
    <StyledTableCell>
      <CellContent>{children}</CellContent>
    </StyledTableCell>
  );
};
Table.Cell = Cell;
const StyledTableCell = styled.td`
  display: table-cell;
  vertical-align: middle;
  width: "inherit";
  white-space: nowrap;
  padding: 0 0.5rem;
`;
const CellContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  span,
  p,
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40ch;
  }

  span,
  p,
  a {
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const EmptyCell = () => {
  return <EmptyCellContent>—</EmptyCellContent>;
};
Table.EmptyCell = EmptyCell;
const EmptyCellContent = styled.span`
  color: #ffffff;
`;
