
import Home from "./pages/Home";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MainHeader from "./layout/Main-Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/error/NotFound";
import Profil from "./pages/Profil";
import Pets from "./pages/Pets";
import Contact from "./pages/Contact";
import PetsDescription from "./components/pages/PetsDescription";


const App =  () => {
  return (
      <Router>
        <MainHeader/>
          <Switch>
              <Route path="/profil" exact component={Profil} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/all-pets" exact component={Pets} />
              <Route path="/pet/:id" exact component={PetsDescription} />
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
