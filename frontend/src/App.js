import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
function App() {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
