import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className=" homepage">Find Your Style</div>;
};

export default Home;
