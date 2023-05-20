import Context from "./components/context/Context";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Context>
      <div className="pl-5 pr-5 mt-3">
        <Header />
      </div>

      <div className="mt-4 pl-5 pr-5 flex justify-center">
        <Banner />
      </div>
    </Context>
  );
}

export default App;
