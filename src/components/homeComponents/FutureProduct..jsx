import ProductCard from "./ProductCard";

const FutureProduct = () => {
    return (
        <div>
            <h1 className="  mb-7 text-center text-2xl">Future Product</h1>
            <div className="grid grid-cols-3 gap-3">
            <ProductCard/>
        </div>
        </div>
    );
};

export default FutureProduct;