import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from '../src/pages/home/home';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import UserList from './pages/userList/userList';
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import Products from './pages/products/products';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            {/* <Home /> */}
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <UserList />
          </Route>
          <Route path='/users/:userId'>
            <User />
          </Route>
          <Route path='/adduser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
