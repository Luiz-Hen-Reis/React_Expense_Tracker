import styled from "styled-components";

interface Props {
  title: string;
  total: number;
  color?: string;
}

const TotalsArea = ({ title, total, color }: Props) => {
  return (
    <Wrapper>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <Total color={color}>
        {total}
      </Total>
    </Wrapper>
  );
};

export default TotalsArea;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;

  .title {
    text-transform: capitalize;
  }
`;

const Total = styled.div<{ color?: string }>`
    color: ${props => props.color ?? 'var(--clr-grey-1)'};
`;