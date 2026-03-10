// import Reg from './components/customer/Reg';

// function App() {
//   return (
//     <div>
//       <Reg/>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reg from './components/customer/Reg'
import Login from './components/customer/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App