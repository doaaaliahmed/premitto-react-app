import style from "../../style/cta.module.scss";

const Cta = () => {
  return (
    <div className={style.cta}>
      <div id="for-partner" className={style["cta_container"]}>
        <div className={style["info-sec"]}>
          <h4 className={style.title}>
            Enjoy the experience of shopping more and <span>paying less!</span>
          </h4>

          <div className={style["btns-container"]}>
            <a href="/">
              <img src="/app-store-white.png" alt="app store logo" />
            </a>
            <a href="/">
              <img src="/google-play-white.png" alt="app store logo" />
            </a>
          </div>
        </div>
        <div className={style["img-sec"]}>
          <img src="/last-LP.png" alt="mobile comment" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
