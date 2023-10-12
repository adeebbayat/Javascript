import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {Routes,Route,Link,Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navigate to="/products"/>}/>
        <Route path="/products" element={<Main/>} />
        <Route path="/products/:id" element={<Detail/>}/>
        <Route path="/products/:id/edit" element = {<Update/>}/>
      </Routes>

    </div>
  );
}
export default App;

