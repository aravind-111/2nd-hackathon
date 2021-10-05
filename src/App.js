import Navbar from './navbar';
import MainPage from './mainpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/login" component={LogIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
