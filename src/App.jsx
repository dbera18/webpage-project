
import {Routes,Route} from 'react-router';
import './App.css'
import AppLayout from './layout/AppLayout';

function App() {
 

  return (
    <Routes>
      <Route element = {<AppLayout />}>
        <Route path="/" element ={<p>Hello</p>} />
      </Route>
    </Routes>
  );
}

export default App;
