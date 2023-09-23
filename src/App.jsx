import { useState } from 'react';
import "./styles.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth/index";
import {ExpenseTracker} from "./pages/expenseTracker/index";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />}/>
          <Route path='/expense-tracker' element={<ExpenseTracker />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
