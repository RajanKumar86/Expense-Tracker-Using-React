import "./App.css";

import Table from "./components/TableSection/Table";
import Form from "./components/FormSection/Form";
import expenseData from "./expensedata";
import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <main>
      <Header/>

      <div className="app-container">
        <Form />
        <Table expenses={expenses} />
      </div>
    </main>
  );
};

export default App;
