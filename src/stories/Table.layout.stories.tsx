import { FilterIcon } from "./Filter.icon";
import { Table } from "./Table.layout";

export default {
  title: "Layout/Table",
  component: Table,
};

const Template = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Cell>
          Hotel name <FilterIcon onClick={() => {}} />
        </Table.Cell>
        <Table.Cell>Rooms</Table.Cell>
        <Table.Cell>Occ</Table.Cell>
      </Table.Header>
      <Table.Body>
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
        <FakeRow />
      </Table.Body>
    </Table>
  );
};

const FakeRow = () => (
  <Table.Row>
    <Table.Cell>Lorem ipsum.</Table.Cell>
    <Table.Cell>
      <Table.EmptyCell />
    </Table.Cell>
    <Table.Cell>Lorem ipsum.</Table.Cell>
  </Table.Row>
);

export const Default = Template.bind({});
