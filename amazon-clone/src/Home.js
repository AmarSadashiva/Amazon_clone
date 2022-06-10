import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__contaner">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71ojFS14UxL._SX3000_.jpg"
        />

        <div className="home__row">
          <Product
            id={123}
            title="Life of Pi"
            price={19.99}
            rating={5}
            image="https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496440507/a/61/7d/158123-ml-1223476.jpg"
          />
          <Product
            id={234}
            title="Better Homes & Gardens"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61BSwua6F4L._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id={345}
            title="Architectural Digest"
            price={19.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/61zXAMINmKL._AC_UL320_SR320,320_.jpg"
          />
          
        </div>
        <div className="home__row">
        <Product
            id={456}
            title="Trael + Leisure"
            price={9.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61rtO3zfreL._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id={567}
            title="National Geographic: History"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61F6lzyYhvL._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id={678}
            title="Life of Pi"
            price={19.99}
            rating={5}
            image="https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496440507/a/61/7d/158123-ml-1223476.jpg"
          />
          <Product
            id={789}
            title="Life of Pi"
            price={19.99}
            rating={5}
            image="https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496440507/a/61/7d/158123-ml-1223476.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id={890}
            title="Amazon Fire TV"
            price={319.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51EBhwkD+kL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
