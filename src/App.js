import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import React, { createContext, useState } from "react";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`App`} id={theme}>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/login">
                <LogIn />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
