import React from "react";
import './App.css'
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ListNews from "./components/listNews/ListNews";
import Home from "./components/home/Home";
import BackofficeContainer from "./components/backoffice/BackofficeContainer";
import ActivitiesDetail from "./components/activities/ActivitiesDetail";
import Activities from "./components/activities/Activities";
import MembersContainer from "./components/members/MembersContainer";
import NewsDetails from "./components/detalleDeNovedades/NewsDetail";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function AppRouter() {
  const userInfo = store.getState();

  return (
    <Router>
      <Navbar />

      <Route
        render={({ location }) => (
          <TransitionGroup>
          
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/contacto" component={Contact} />
                <Route path="/nosotros" component={MembersContainer} />
                <Route path="/inicio-sesion" component={Login} />
                <Route path="/registro" component={Register} />
                <Route path="/novedades/:id" component={NewsDetails} />
                <Route path="/novedades" component={ListNews} />
                <Route path="/actividades/:id" component={ActivitiesDetail} />
                <Route path="/actividades" component={Activities} />
                <PrivateRoute
                  path="/backoffice"
                  component={BackofficeContainer}
                  isAuthenticated={userInfo.auth.isAuthenticated}
                  Role={userInfo.auth.user.roleId}
                />
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

      <Footer />
    </Router>
  );
}

export default AppRouter;
