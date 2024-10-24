import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <form className="expense-form">
        <div className="input-container">
          <label htmlFor="Title">Title</label>
          <input id="title" type="text" name="title"></input>
        </div>

        <div className="input-container">
          <label>Category</label>
          <select id="category">
            <option hidden> Select Category </option>
            <option value="Grocery"> Grocery</option>
            <option value="Grocery"> Clothes</option>
            <option value="Grocery"> Bills</option>
            <option value="Grocery"> Education</option>
            <option value="Grocery"> Medicine</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="text" name="amount"></input>
        </div>

        <button className="add-btn"> Add </button>
      </form>
    </>
  );
};

export default Form;
