import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;

    const productData = { email };
    console.log(productData);
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-blue-400 p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form
            action="#"
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 text-black gap-4 md:grid-cols-2">
              <div>
                <span className="label-text">Product Name?</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Product Name"
                  type="text"
                  id="title"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <span className="label-text">Brand Name?</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Brand Name"
                  type="text"
                  id="brand"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <span className="label-text">Price</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Add price"
                  type="text"
                  id="price"
                />
              </div>
              <div>
                <span className="label-text"> stock?</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Prive Stock"
                  type="text"
                  id="stock"
                />
              </div>

              <div>
                <span className="label-text"> Catagory</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Product Catagory"
                  type="text"
                  id="catagory"
                />
              </div>
            </div>
            <div>
              <span className="label-text"> Descriiption </span>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows="4"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
