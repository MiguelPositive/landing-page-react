import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import PageCarousel from "../carousel/PageCarousel";
import ComunityVideo from "../comunityVideo/ComunityVideo";
import Title from "../help/Title";
import Results from "../results/Results";
import Iam from "../iam/Iam";
import Testimonials from "../testimonials/Testimonials";
import { useContext } from "react";
import { store } from "../context/Context";

const Page = () => {
  const { showMenu } = useContext(store);

  return (
    <div
      className={`pb-10 900px:pb-5 h-screen ${
        showMenu ? "overflow-hidden" : ""
      }`}
    >
      <div className="pl-5 pr-5 pt-3 900px:pl-16  900px:pr-16">
        <Header />
      </div>
      <div className="pt-4 pl-5 pr-5 flex justify-center  900px:pl-16 900px:pr-16">
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

      <div className="pt-5 pb-5 bg-slate-200">
        <div className="pt-10 pl-5 pr-5  900px:pl-16 900px:pr-16">
          <div className="pt-5">
            <Title
              title={"Resultados del progreso"}
              bgColor={"#9AE589"}
              textColor={"black"}
            />
          </div>
          <div className="mb-10 pt-10">
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

      <Title title={"Testimonios"} bgColor={"#FF8956"} textColor={"white"} />

      <div className="pl-10 pr-10 pb-10 grid grid-cols-1 900px:grid-cols-2 gap-10 ">
        <div>
          <Testimonials
            name={"Paula Guzman"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae turpis vel augue iaculis varius. Sed ullamcorper sed sapien ut tincidunt. In euismod, leo et iaculis feugiat, risus ex fermentum lacus, a facilisis diam arcu et lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nisl, dictum et felis nec, imperdiet lacinia justo. Etiam at pulvinar risus, vel accumsan turpis. Cras non erat vel elit gravida laoreet."
            }
            photo="1"
          />
        </div>

        <div>
          <Testimonials
            name={"Rafael Contreras"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae turpis vel augue iaculis varius. Sed ullamcorper sed sapien ut tincidunt. In euismod, leo et iaculis feugiat, risus ex fermentum lacus, a facilisis diam arcu et lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nisl, dictum et felis nec, imperdiet lacinia justo. Etiam at pulvinar risus, vel accumsan turpis. Cras non erat vel elit gravida laoreet."
            }
            photo="2"
          />
        </div>

        <div>
          <Testimonials
            name={"Daniel Zapata"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae turpis vel augue iaculis varius. Sed ullamcorper sed sapien ut tincidunt. In euismod, leo et iaculis feugiat, risus ex fermentum lacus, a facilisis diam arcu et lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nisl, dictum et felis nec, imperdiet lacinia justo. Etiam at pulvinar risus, vel accumsan turpis. Cras non erat vel elit gravida laoreet."
            }
            photo="3"
          />
        </div>
        <div>
          <Testimonials
            name={"Jose Maria"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae turpis vel augue iaculis varius. Sed ullamcorper sed sapien ut tincidunt. In euismod, leo et iaculis feugiat, risus ex fermentum lacus, a facilisis diam arcu et lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nisl, dictum et felis nec, imperdiet lacinia justo. Etiam at pulvinar risus, vel accumsan turpis. Cras non erat vel elit gravida laoreet."
            }
            photo="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
