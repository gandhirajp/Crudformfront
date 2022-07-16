import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './userList';
import UserCreate from './userCreate';
import EditUser from './editUser';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';


function App() {
  return (

    <BrowserRouter>
      <div className='container mt-5'>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/create" element={<UserCreate />} />
          <Route path="/edit-user/:id" element={<EditUser />} />


        </Routes>
      </div>
    </BrowserRouter >

  );
}

export default App;
