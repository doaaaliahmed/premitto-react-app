import { useState } from "react";
import Button from "../UI/Button";
import style from "../../style/offers.module.scss";

export const featuresList = [
  {
    title: "Log in",
    text: "Download the mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
  {
    title: "Search for deals",
    text: "mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
  {
    title: "Save more",
    text: "mobile from the apple store. Please enter your details, top register, and get our exclusive one-year special discounts membership.",
  },
];

const Offers = () => {
  // const tabItems = ["Log in", "Search for deals", "Save more"] as string[];
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <section id="how-it-works" className={style.offers}>
      <div className={style["offers_container"]}>
        <Button text=" How it works" />

        <h3 className={style.heading}>
          Amazing online offers are waiting for you!
        </h3>
        <span>In 3 simples steps, you can start saving!</span>
        <p className={style["heading-text"]}>
          Log in to Premitto today and discover a uniqe way to save, with
          hundreds of in-store deals and offers and online promo codes to enjoy
          the pleasure of shopping
        </p>
        <div className={style["mobile-img"]}>
          <img src="/content.png" alt="content" />
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={style["features-list"]}>
        <ul>
          {featuresList.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedItem(idx)}
              className={`${style.list} ${
                selectedItem === idx ? style.selected : style.list
              }`}
            >
              <legend
                role="tab"
                aria-selected={selectedItem === idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
              >
                {item.title}
              </legend>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
