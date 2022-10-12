import styled from "styled-components";
import MonthSelectionArea from "./MonthSelectionArea";
import TotalsArea from "./TotalsArea";

interface Props {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  return (
    <Wrapper className="container component-container">
        <MonthSelectionArea currentMonth={currentMonth} onMonthChange={onMonthChange} />
        <TotalsArea title="income" total={income} />
        <TotalsArea title="expense" total={expense} />
        <TotalsArea title="total balance" total={income - expense}  color={(income - expense) < 0 ? 'var(--clr-red)' : 'var(--clr-green)'} />
    </Wrapper>
  )
}

export default InfoArea;

const Wrapper = styled.div`
    margin-top: -30px;
    display: flex;
    justify-content: space-between;
`;