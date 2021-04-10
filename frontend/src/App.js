import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BootcampsPage from "./pages/BootcampsPage";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={BootcampsPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
