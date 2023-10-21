import Blogs from "../components/Home/Blogs";
import Cta from "../components/Home/Cta";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Offers />
      <Blogs />
      <Cta />
    </div>
  );
};

export default Home;
