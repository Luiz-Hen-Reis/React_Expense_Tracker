import styled from "styled-components";
import { formatDate } from "../helpers/DateOperations";
import { categories } from "../utils/categories";
import { items } from "../utils/items";
import { Item } from "../utils/types";

interface Props {
  list: Item[];
}

const TableArea = ({ list }: Props) => {
  return (
    <Wrapper className="container component-container">
      <thead>
        <tr className="header-row">
          <TableHeader width={100}>date</TableHeader>
          <TableHeader width={130}>category</TableHeader>
          <TableHeader>title</TableHeader>
          <TableHeader width={150}>value</TableHeader>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td>{formatDate(item.date)}</td>
            <td>{categories[item.category].title}</td>
            <td>{item.title}</td>
            <td>$ {item.value}</td>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
};

export default TableArea;

const Wrapper = styled.table`
  width: 100%;
  text-transform: capitalize;
`;

const TableHeader = styled.th<{ width?: number }>`
  width: ${(props) => props.width ?? "auto"};
  padding: 10px 0;
  text-align: left;
`;
