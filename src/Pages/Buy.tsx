import style from "../style/buy.module.scss";

const Buy = () => {
  const checkList = [
    "Includes hundreds of offers across six categories",
    "Unlimited offer usage for the full subscription period",
    "Valid for 365 days from the date of purchase",
    "Includes offers in all the cities in Saudi Arabia",
  ];
  return (
    <section className={style.buy}>
      <div className={style["buy_container"]}>
        <button className={style["more-btn"]}>Do more and spend less</button>
        <h1 className={style.title}>
          You&apos;ll wonder how you ever <span>lived without it</span>
        </h1>

        <div className={style["price-box"]}>
          <div className={style.container}>
            <legend className={style.price}>
              <span className={style.number}>72 SAR</span>
              <span className={style.month}>/month</span>
            </legend>
            <p className={style["premium-text"]}>1 Year Premium membership</p>

            <ul className={style["list-box"]}>
              {checkList.map((l, idex) => (
                <li key={idex} className={style.list}>
                  <span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <button className={style["start-btn"]}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
