import {
  Button,
  Container,
  Grid,
  GridItem,
  Box,
  Stack,
  IconButton,
  Center
} from "@chakra-ui/react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import Home from "./page/home"
import ButtomNavbar from "./components/ButtomNavbar"
function App() {
  return (
    <>
      <Router>
        <Container colorScheme="teal">

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <Container style={{ //overflowY: 'scroll',
                 height: "700px" }} className="list-view" borderWidth="2px" borderRadius="lg">
            <Switch>
              <Route path="/about">
                sdfsdfff
          </Route>
              <Route path="/topics">
                sdfdsdddd
          </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
          <ButtomNavbar/>
        </Container>
      </Router>
    </>
  );
}

export default App;
