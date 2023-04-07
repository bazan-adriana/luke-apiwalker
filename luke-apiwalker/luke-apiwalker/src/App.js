import React from 'react'
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './Views/People';
import Planet from './Views/Planet';



function App() {
  return (
    <div className='card mt-5 text-center'>
      <h1 className='text-success'>Luke ApiWalker</h1> <hr/>
      <Form />
<hr/>
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
