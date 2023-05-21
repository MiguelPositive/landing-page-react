import Context from "./components/context/Context";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Iam from "./components/iam/Iam";
import PageCarousel from "./components/carousel/PageCarousel";
import ComunityVideo from "./components/comunityVideo/ComunityVideo";
import Results from "./components/results/Results";

function App() {
  return (
    <Context>
      <div className="pb-10 900px:pb-5">
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
        <div className="mt-5 pl-5 pr-5 900px:pl-16 900px:pr-16">
          <ComunityVideo />
        </div>

        <div className="mt-5">
          <div className="flex justify-center items-center text-center h-48 bg-[#94E959] text-3xl font-extrabold mb-5">
            Resultados del progreso
          </div>
          <div className="mt-10 pl-5 pr-5 900px:pl-16 900px:pr-16">
            <div className="mb-10">
              <Results
                img={"bg-img-comunity-1"}
                title={"Titulo de imagen 1"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus est, fermentum non aliquet ut, pulvinar eget lectus. Quisque iaculis tristique urna quis cursus. Proin nec congue dolor. Duis vestibulum sagittis diam id convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin commodo pellentesque sapien sed ultrices."
                }
                reverse={true}
              />
            </div>

            <div className="mb-10">
              <Results
                img={"bg-img-comunity-2"}
                title={"Titulo de imagen 2"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus est, fermentum non aliquet ut, pulvinar eget lectus. Quisque iaculis tristique urna quis cursus. Proin nec congue dolor. Duis vestibulum sagittis diam id convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin commodo pellentesque sapien sed ultrices."
                }
                reverse={false}
              />
            </div>

            <div className="mb-10">
              <Results
                img={"bg-img-comunity-3"}
                title={"Titulo de imagen 3"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus est, fermentum non aliquet ut, pulvinar eget lectus. Quisque iaculis tristique urna quis cursus. Proin nec congue dolor. Duis vestibulum sagittis diam id convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin commodo pellentesque sapien sed ultrices."
                }
                reverse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Context>
  );
}

export default App;
