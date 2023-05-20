import Context from "./components/context/Context";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Iam from "./components/iam/Iam";
import PageCarousel from "./components/carousel/PageCarousel";

function App() {
  return (
    <Context>
      <div className="pl-5 pr-5 mt-3 900px:pl-16 900px:pr-16">
        <Header />
      </div>

      <div className="mt-4 pl-5 pr-5 flex justify-center 900px:pl-16 900px:pr-16">
        <Banner />
      </div>

      <div className="mt-5 pl-5 pr-5 900px:pl-16 900px:pr-16">
        <Iam />
      </div>

      <div className="mt-5 pl-5 pr-5 900px:pl-16 900px:pr-16">
        <PageCarousel />
      </div>
    </Context>
  );
}

export default App;
