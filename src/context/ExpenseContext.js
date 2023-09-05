import React, { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => { 

    const [expenseData, setExpenseData] = useState([]);

    const addExpense = (newExpense) => { 
        setExpenseData((prev) => [...prev, newExpense]);
    }

    return (
        <ExpenseContext.Provider value={{ expenseData, addExpense }}>
            {children}
        </ExpenseContext.Provider>    
    )
}


export const useExpense = () => useContext(ExpenseContext);