import { useEffect, useState } from "react";
import { Header, InfoArea, InputArea, TableArea } from "./components";
import { filterList, getCurrentDate } from "./helpers/DateOperations";
import { categories } from "./utils/categories";
import { items } from "./utils/items";
import { Item } from "./utils/types";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  const handleMonthChange = (newMonth: string) => {
    setCurrentDate(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList: Item[] = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() => {
    setFilteredList(filterList(list, currentDate));
  }, [list, currentDate]);

  useEffect(() => {
    let incomeCount: number = 0;
    let expenseCount: number = 0;

    for (let i in filteredList) {
      categories[filteredList[i].category].expense
        ? (expenseCount = filteredList[i].value)
        : (incomeCount = filteredList[i].value);
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  return (
    <>
      <Header />
      <main>
        <InfoArea
          currentMonth={currentDate}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea addItem={handleAddItem} />
        <TableArea list={filteredList} />
      </main>
    </>
  );
};

export default App;
