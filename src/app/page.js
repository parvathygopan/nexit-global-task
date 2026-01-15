import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ClientsSlide from "./Components/Home/ClientsSlide";
import FaqSection from "./Components/Home/FaqSection";
import Industries from "./Components/Home/Industries";
import Ourstory from "./Components/Home/Ourstory";
import QuoteSlider from "./Components/Home/QuoteSlider";

export default function Home() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="wrapped-section">
        <Header />
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-12 color-change">
                <div className="hero-content">
                  <h1 className="hero-title">
                    An ultra effiecient
                    <br />
                    xxx for your Business
                  </h1>
                  <p className="hero-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius
                  </p>
                  <button className="btn discover-btn">Discover More</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="laptop-container">
                  <svg
                    className="laptop-image"
                    viewBox="0 0 800 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="laptopGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: '#2c2c2c', stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: '#1a1a1a', stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>

                    <g>
                      <rect
                        x="120"
                        y="40"
                        width="560"
                        height="350"
                        rx="10"
                        fill="#000"
                      />

                      <rect
                        x="135"
                        y="50"
                        width="530"
                        height="310"
                        fill="#fff"
                      />

                      <rect
                        x="135"
                        y="50"
                        width="530"
                        height="20"
                        fill="#000"
                      />

                      <rect
                        x="100"
                        y="390"
                        width="600"
                        height="15"
                        rx="3"
                        fill="url(#laptopGradient)"
                      />

                      <rect
                        x="50"
                        y="405"
                        width="700"
                        height="8"
                        rx="4"
                        fill="#3a3a3a"
                      />

                      <ellipse cx="400" cy="413" rx="350" ry="4" fill="#555" opacity="0.3" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <QuoteSlider />
        <ClientsSlide />
        <Ourstory />
        <Industries />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}
