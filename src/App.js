import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { selectUser } from './featurs/userSlice';
import Logout from './component/Logout';
import { useSelector } from 'react-redux';
function App() {
  const user =useSelector(selectUser)
  return (
    <div className="App">
   {user? <Logout /> :<Login /> }
  

    </div>
  );
}

export default App;
