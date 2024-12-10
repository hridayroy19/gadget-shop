import Banner from "../components/homeComponents/Banner";
import FutureProduct from "../components/homeComponents/FutureProduct.";
import Review from "../components/homeComponents/Review";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <FutureProduct />
        <Review/>
      </div>
    </>
  );
};

export default Home;
