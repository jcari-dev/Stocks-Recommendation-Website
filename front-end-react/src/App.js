import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Account from "./pages/Account";
import Bob from "./pages/Bob";
import ContactUs from "./pages/ContactUs";
import History from "./pages/History";
import Starred from "./pages/Starred";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AlgoBob from "./pages/AlgoBob";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8f00",
    },
    secondary: {
      main: "#ffcc80",
    },
    third: {
      main: "#ec5800"
    },
  },
});

//Home
//Bob
//Starred
//History
//Account
//Contact

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/signIn">
            <Slideshow />
          </Route>
          <Route exact path="/">
            {localStorage.getItem("UserIn") ? <div> <Sidebar /> <Home /> </div> : <SignIn />}
          </Route>

          <Route path="/Account">
          
          <Sidebar />
            <Account />
          </Route>
          <Route path="/Bob">
          <Sidebar />
            <Bob />
          </Route>
          <Route path="/Contact">
          <Sidebar />
            <ContactUs />
          </Route>
          <Route path="/History">
          <Sidebar />
            <History />
          </Route>
          <Route path="/Starred">
          <Sidebar />
            <Starred />
          </Route>
          <Route path="/AlgoBob">
          <Sidebar />
            <AlgoBob/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
