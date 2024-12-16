import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const catagory = data.catagory;
    const description = data.description;
    const sellerEmail = user?.email;
    const productData = {
      title,
      brand,
      price,
      stock,
      catagory,
      description,
      sellerEmail,
    };
    // console.log(productData);

    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:5000/product", productData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data insert successfuly",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });

    // reset();
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
                  {...register("title", { required: true })}
                />
                {errors.email && (
                  <p className=" text-red-500 font-medium">Name is required</p>
                )}
              </div>
              <div>
                <span className="label-text">Brand Name?</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Brand Name"
                  type="text"
                  id="brand"
                  {...register("brand", { required: true })}
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
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <span className="label-text"> stock?</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Prive Stock"
                  type="text"
                  id="stock"
                  {...register("stock", { required: true })}
                />
              </div>

              <div>
                <span className="label-text"> Catagory</span>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Product Catagory"
                  type="text"
                  id="catagory"
                  {...register("catagory", { required: true })}
                />
              </div>
            </div>
            <div>
              <span className="label-text"> Descriiption </span>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows="4"
                id="description"
                {...register("description", { required: true })}
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
