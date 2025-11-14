
import {Routes,Route} from 'react-router';
import './App.css'
import AppLayout from './layout/AppLayout';
import Homepage from './components/homepage/Homepage';

function App() {
 

  return (
    <Routes>
      <Route element = {<AppLayout />}>
        <Route path="/" element ={<p><Homepage /></p>} />
      </Route>
    </Routes>
  );
}

export default App;
