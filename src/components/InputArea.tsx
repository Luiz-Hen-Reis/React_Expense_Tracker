import React, { useState } from "react";
import styled from "styled-components";
import { formatToDate } from "../helpers/DateOperations";
import { Item } from "../utils/types";

interface Props {
  addItem: (item: Item) => void;
}

const initialState = {
  date: "",
  category: "",
  title: "",
  value: 0,
};

const InputArea = ({ addItem }: Props) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const addNewItem = (e: React.MouseEvent) => {
    e.preventDefault();

    const { date, category, title, value } = values;

    if (!date || !category || !title || !value) {
      alert("please fill out all fields!");
      return;
    }

    addItem({ ...values, date: formatToDate(date) });
  };

  return (
    <Wrapper className="container component-container">
      <div className="input input-date">
        <label>date</label>
        <input type="date" name="date" onChange={handleChange} />
      </div>
      <div className="input input-category">
        <label>category</label>
        <input type="text" name="category" onChange={handleChange} />
      </div>
      <div className="input input-title">
        <label>title</label>
        <input type="text" name="title" onChange={handleChange} />
      </div>
      <div className="input input-value">
        <label>value</label>
        <input type="number" name="value" onChange={handleChange} />
      </div>
      <div className="input input-button">
        <button onClick={addNewItem}>add new item</button>
      </div>
    </Wrapper>
  );
};

export default InputArea;

const Wrapper = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .input {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

    input {
      width: 85%;
      border-radius: 5px;
      border: 1px solid var(--clr-grey-1);
    }
  }

  .input-date {
    input {
      width: 90%;
    }
  }

  .input-button {
    button {
      text-transform: capitalize;
      background-color: var(--clr-blue-1);
      border: none;
      border-radius: 5px;
      padding: 10px;
      color: var(--clr-white);
      font-weight: 700;
      cursor: pointer;
      transition: all ease 0.3s;

      &:hover {
        background-color: var(--clr-white);
        color: var(--clr-blue-1);
      }
    }
  }
`;
