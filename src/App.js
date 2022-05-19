
import Home from "./pages/Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MainHeader from "./layout/Main-Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/error/NotFound";
import Profil from "./pages/Profil";


const App =  () => {
  return (
      <Router>
        <MainHeader/>
          <Switch>
              <Route path="/profil" exact component={Profil} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/" exact component={Home} />
              <Route to="/404" component={NotFound} />
              <Redirect to="/404" />
          </Switch>
      </Router>

  );
}

export default App;
