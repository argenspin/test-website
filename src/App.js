import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SecondComponent from "./components/SecondComponent";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen  flex flex-col items-start justify-start overflow-x-hidden  bg-gray-300  ">
        <div>
          <Navbar />
        </div>

        <div className=" overflow-y-scroll w-full  grow ">
          <Home />

          <SecondComponent />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
