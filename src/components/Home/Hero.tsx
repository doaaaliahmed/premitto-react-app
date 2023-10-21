import style from '../../style/hero.module.scss';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style["hero_container"]}>
        <div className={style["hero_container--info-sec"]}>
          <h1>
            Get the best deals and <br></br> offers in your favorite <br></br>{" "}
            <span>permium stores!</span>
          </h1>
          <p>
            Premitto is your best shopping ally, enjoy a whole year od
            discounts, new offers, and exclusive access to online promo codes
            for the top best products and services. Your options are endless!
          </p>
          <div className={style["btns-container"]}>
            <a href="/">
              <img src="/Mobile-app-store-badge.png" alt="app store logo" />
            </a>
            <a href="/">
              <img src="/google-play-badge-logo-svgrepo-com.svg" alt="app store logo" />
            </a>
          </div>
        </div>

        <div className={style["hero_container--img-sec"]}>
          <img src="/banner-LP.png" alt="Hero Img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
