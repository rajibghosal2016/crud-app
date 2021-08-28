import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./component/Navbar";
import AllUsers from "./component/AllUsers";
import AddUsers from "./component/AddUsers";
import EditUser from "./component/EditUser";
import NotFound from "./component/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/" component={AllUsers} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
