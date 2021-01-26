import "./Hero.scss";
import hero from "./hero.svg";

function Hero(props) {
  return (
    <div className="hero">
      <img className="hero__img" src={hero} alt="" />
    </div>
  );
}

export default Hero;
