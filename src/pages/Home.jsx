import Accordion from "../components/homeComponents/Accordion";
import Banner from "../components/homeComponents/Banner";
import FutureProduct from "../components/homeComponents/FutureProduct.";
import Review from "../components/homeComponents/Review";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <div className=" container mx-auto">
          <FutureProduct />
          <div className=" mt-16 mb-10">
            <Review />
          </div>
          <div className=" mt-16">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
