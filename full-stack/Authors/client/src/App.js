import logo from './logo.svg';
import Main from './views/Main';
import New from './views/New';
import './App.css';
import {Routes,Route,Link,Navigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/authors"/>}/>
        {/* <Route path="/authors" element={<Main/>}/> */}
        <Route path="/authors" element={<Main/>}/>
        <Route path="/authors/new" element={<New/>}/>
        {/* <Route path="/authors/:id/edit" element={<Update/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
