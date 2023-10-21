import Button from "../UI/Button";
import style from "../../style/features.module.scss";

const Features = () => {
  const featuresList = [
    {
      icon: "/Featured-icon-1.png",
      title: "Restaurants & Cafes",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: "/Featured-icon-2.png",
      title: "Retial & Services",
      text: "Be the first to discover and receive new offers on your favorite brands. Get the most out of your shopping!",
    },
    {
      icon: "/Featured-icon-3.png",
      title: "Beauty & Wellness",
      text: "Pamper and take care of yourself with special deals for spas, beauty salons, health, fitness and more.",
    },
    {
      icon: "/Featured-icon-4.png",
      title: "TRavel & Hotels",
      text: "the world is yours! Access deals and offers and get the best hotels and travel packages.",
    },
    {
      icon: "/Featured-icon-5.png",
      title: "Entertainment",
      text: "Get discounts and pffers from your favourite restaurants & cafes! Let's enjoy the best experiences for your plate.",
    },
    {
      icon: "/Featured-icon-6.png",
      title: "Online Shopping",
      text: "Optimize the way you recover, train, and sleep with daily reporting on mobile and desktop apps. Start training smarter, not harder.",
    },
  ];

  return (
    <section id="discover-deals" className={style.features}>
      <div className={style["features_container"]}>
        <Button text="Discover the best discounts and offers nears you"></Button>

        <h3 className={style.heading}>
          Enjoy the art of purchasing <br></br> and saving!
        </h3>

        <p className={style["heading-text"]}>
          Our user-friendly mobile app lets you find deals and offers in-store
          and promo codes to shop online with a sophisticated geo-location
          system.
        </p>

        <div className={style["features-list"]}>
          <ul>
            {featuresList.map((feature) => (
              <li key={feature.title}>
                <img src={feature.icon} alt={feature.title} />

                <legend>{feature.title}</legend>

                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
          <div className={style["img-sec"]}>
            <img src="/mockup-1.jpeg" alt="Hero Img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
