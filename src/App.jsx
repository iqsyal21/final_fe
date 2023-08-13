import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import theme from "./config/theme";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import AddPage from "./pages/AddPage";

function App() {
  const getToken = localStorage.getItem("token");
  const [token, setToken] = useState(getToken);

  useEffect(() => {}, [token]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Header token={token} setToken={setToken} />
            <HomePage token={token} />
          </Route>
          <Route path="/detail/:id">
            <Header token={token} setToken={setToken} />
            <DetailPage token={token} />
          </Route>
          <Route path="/add">
            <AddPage token={token} />
          </Route>
          <Route path="/login">
            <LoginPage setToken={setToken} />
          </Route>
          <Route path="/register">
            <RegisterPage setToken={setToken} />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
