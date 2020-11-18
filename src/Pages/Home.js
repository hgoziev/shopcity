import React from "react";
import Product from "../Components/Product";
import "../Style/Home.css";
import ear from "../Assets/images/ear.jpg";
import fur from "../Assets/images/f.jpg";
import fur2 from "../Assets/images/f2.jpg";
import men from "../Assets/images/sh.jpg";
import men2 from "../Assets/images/sh2.jpg";
import com from "../Assets/images/c.jpg";
import wom from "../Assets/images/w.jpg";
import speaker from "../Assets/images/sp.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt="picture"
        />

        <div className="home__row">
          <Product
            id="5"
            title="Airpods speacial - IOS"
            price={17.34}
            image={ear}
            rating={3}
          />
          <Product
            id="2"
            title=" Dell XPS7390 13  Newest 10th Gen Intel i5-10210U, 8GB RAM, 256GB SSD"
            price={325}
            image={com}
            rating={2}
          />
          <Product
            id="2"
            title="ION Audio Block Rocker Plus | 100W Portable Speaker"
            price={325}
            image={speaker}
            rating={2}
          />
          <Product
            id="6"
            title="Apple iPhone 12 Pro Max.
            It’s a leap year. [128GB , 64GB, Midnight Green]"
            price={1580}
            image="https://pbs.twimg.com/media/EVHI-enVAAArb5R.jpg"
            rating={5}
          />
          {/* Products */}
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Amazon Essentials Men's Regular-fit Short-Sleeve Print Shirt"
            price={975}
            image={men2}
            rating={3}
          />
          <Product
            id="2"
            title="Tommy Hilfiger Women's Short Chevron Quilted Heritage Puffer Jacket "
            price={325}
            image={wom}
            rating={2}
          />
          <Product
            title="Amazon Brand - Goodthreads Men's Slim-Fit Long-Sleeve Plaid Herringbone Shirt"
            price={1025}
            image={men}
            rating={4}
            id="1"
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Serta Copenhagen Sofa Couch for Two People, Pillowed Back Cushions and Rounded Arms"
            price={325}
            image={fur}
            rating={2}
          />
          <Product
            id="2"
            title="
          Roll over image to zoom in
          Bose Home Speaker 500 with Alexa Voice Control Built-in, Black"
            price={325}
            image={fur2}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
