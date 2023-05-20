import Context from "./components/context/Context";
import Header from "./components/header/Header";
function App() {
  return (
    <Context>
      <div className="pl-5 pr-5 mt-3">
        <Header />
      </div>
    </Context>
  );
}

export default App;
