import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
