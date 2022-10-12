import { Item } from "../utils/types";

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${addZero(day)}-${addZero(month)}-${year}`;
};

const addZero = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const getCurrentDate = (): string => {
  const now = new Date();

  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterList = (list: Item[], currentDate: string): Item[] => {
  let newList: Item[] = [];
  const [year, month] = currentDate.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};

export const formatMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split("-");

  const months: string[] = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return `${months[parseInt(month) - 1]} ${year}`;
};

export const formatToDate = (date: string): Date => {
  const [year, month, day] = date.split("-");
  const newDate = new Date(parseInt(year), parseInt(month), parseInt(day));

  return newDate;
};
