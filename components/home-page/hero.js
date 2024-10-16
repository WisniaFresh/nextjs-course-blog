import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jakub.jpg"
          alt="An image showing Jakub"
          width={300}
          height={400}
        />
      </div>
      <h1>Hi, I'm Jakub</h1>
      <p>
        You are checking my demo blog app that I built to train nextJS skills.
        Happy to have you here!
      </p>
    </section>
  );
}

export default Hero;
