import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import CreateNote from "./Screens/CreateNote/CreateNote";
import SingleNote from "./Screens/SingleNote/SingleNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/notes/:id" component={SingleNote} />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
