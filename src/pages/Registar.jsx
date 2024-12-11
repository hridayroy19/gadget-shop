/* eslint-disable react/no-unescaped-entities */
import { CiUser } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Registar = () => {
  return (
    <div className="font-serif">
      <div className="bg-[#4c82c971] lg:h-screen md:h-screen flex justify-center items-center">
        <div className="w-full lg:w-[800px] md:w-[700px] lg:h-[420px] shadow-2xl bg-[#26426d3b] flex flex-col lg:flex-row md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="w-full lg:w-[400px] md:px-2 px-5 flex md:border-e-2 justify-center lg:justify-start">
            <img src="../../public/login.png" alt="" />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[380px] px-2">
            <h1 className=" text-blue-700 lg:mt-8 mt-6 text-center font-extralight font-serif text-3xl">
              Create Account
            </h1>

            {/* Form section */}
            <div className="w-full mx-auto">
              <form className="card-body">
                <div>
                  <label
                    htmlFor="name"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <CiUser className=" text-xl" />
                    <input
                      id="name"
                      type="text"
                      className="grow"
                      placeholder=" Enter Your Name "
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <MdOutlineMarkEmailUnread className=" text-xl" />
                    <input
                      id="email"
                      type="email"
                      className="grow"
                      placeholder="Email Address"
                      required
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label
                    htmlFor="password"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <RiLockPasswordLine className=" text-xl" />
                    <input
                      id="password"
                      type="password"
                      className="grow"
                      placeholder="Password"
                      required
                    />
                  </label>
                </div>

                <button className="bg-blue-500 border-none btn btn-block mt-3">
                  Login Now
                </button>

                <h1 className="text-white py-1 mt-2 ">
                  Don't have an account?
                  <span className="ml-2  text-blue-700">
                    <Link to={"/login"}> Signup </Link>
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
