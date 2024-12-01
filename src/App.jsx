import React, { useState } from "react";

const App = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!description || !amount || isNaN(amount) || amount < 0) {
      alert("Please enter a valid description and amount!");
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    setExpenses([newExpense, ...expenses]);
    setAmount("");
    setDescription("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="w-full h-screen  flex flex-col gap-5 items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>

      <div className="flex flex-col gap-2 justify-center items-center">
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border-2 border-gray-400 px-3 py-2 rounded-lg"
          type="text"
          placeholder="Description"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="border-2 border-gray-400 px-3 py-2 rounded-lg"
          type="number"
          placeholder="Amount"
        />
        <button
          onClick={addExpense}
          className="w-fit mt-3 bg-green-600 px-3 py-2 text-white rounded-lg"
        >
          Add Expense
        </button>
        <h1 className="text-xl mt-3">Total: ₹{totalAmount.toFixed(2)} </h1>

        <ul  >
          {expenses.map((expense) => {
            return (
              <li className=" w-full flex justify-evenly items-center p-3 border-2 border-gray-400 rounded-lg mt-4 " key={expense.id}>
                {expense.description} - ₹{expense.amount.toFixed(2)}
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="px-3 py-2 ml-4  rounded-lg bg-red-600 text-white"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
