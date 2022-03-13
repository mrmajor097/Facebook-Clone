import './App.css';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  let user = localStorage.getItem("user");
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>

          {user?(
            <>
          <Route path="/"> <Home />  </Route>
          <Redirect to="/"/>
            </>
          ):(
            <>
            <Route path="/login"> <Login /> </Route>
            <Redirect to="/login"/>
            </>
          )}

        </Switch>
      </BrowserRouter>

</div>
  );
}

export default App;
