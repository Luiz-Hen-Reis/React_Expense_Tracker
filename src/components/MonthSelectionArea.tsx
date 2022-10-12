import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { formatMonth } from "../helpers/DateOperations";

interface Props {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
}

const MonthSelectionArea = ({ currentMonth, onMonthChange }: Props) => {
  const handlePreviousMonth = () => {
    const [year, month] = currentMonth.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    newDate.setMonth(newDate.getMonth() - 1);

    onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    newDate.setMonth(newDate.getMonth() + 1);

    onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  return (
    <Wrapper>
      <div className="btn" onClick={handlePreviousMonth}>
        <AiOutlineArrowLeft size={25} />
      </div>
      <div>{formatMonth(currentMonth)}</div>
      <div className="btn" onClick={handleNextMonth}>
        <AiOutlineArrowRight size={25} />
      </div>
    </Wrapper>
  );
};

export default MonthSelectionArea;

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  text-transform: capitalize;

  .btn {
    cursor: pointer;
  }
`;
