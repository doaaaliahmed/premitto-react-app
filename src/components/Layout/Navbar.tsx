import { useState } from "react";
import style from "../../style/navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navList = [
    { name: "Discover Deals", link: "discover-deals" },
    { name: "How it works", link: "how-it-works" },
    { name: "For partners", link: "for-partner" },
    { name: "Blog", link: "blog" },
  ];

  const handleScrollBtn = (text: string) => {
    const el = document.getElementById(text);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={style.nav}>
      <div className={style["nav_container"]}>
        <div className={style["flex-between"]}>
          <a href="/">
            <img className={style.logo} src="/1.png" alt="premitto logo" />
          </a>

          {/* <!-- Mobile menu button --> */}
          <div className={style["toggle-btn-container"]}>
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className={style["toggle-btn"]}
              aria-label="toggle menu"
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`${style["list-container"]} ${
            open ? style.open : style.hide
          }`}
        >
          <div className={style["list-container--menu-box"]}>
            <a href="/buy">Buy</a>

            {navList.map((li) => (
              <button key={li.name} onClick={() => handleScrollBtn(li.link)}>
                {li.name}
              </button>
            ))}
          </div>

          <div className={style["list-container--partner-box"]}>
            <button>Become a partner</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
