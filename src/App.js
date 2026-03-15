// import Reg from './components/customer/Reg';

// function App() {
//   return (
//     <div>
//       <Reg/>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Reg from "./components/Auth/Reg";
import AdminDash from "./components/admin/AdminDash";
import CustomerDash from "./components/customer/CustomerDash";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />
        <Route path="/customer-dashboard" element={<CustomerDash />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;