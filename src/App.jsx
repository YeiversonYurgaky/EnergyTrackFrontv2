import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Dashboard from './Pages/Dashboard';
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
