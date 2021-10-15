import "./App.css";
import PlanLayout from "./pages/Layout/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotfication from "./pages/AllowNotfication";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import Explore from './pages/Explore'
//plan layout
function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notification",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotfication}
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home", "/explore"]}>
        <AppLayout>
          <Switch>
            <Route exact path='/home' component={() => <Home/>}/>
            <Route exact path='/explore' component={Explore}/>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
