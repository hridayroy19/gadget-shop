/* eslint-disable react/no-unescaped-entities */
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
const Login = () => {
  const { Login, signInWithgoogle } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Navigat = useNavigate()
  const onSubmit = (data) => {
   Login(data.email, data.password)
   Navigat('/')
   
  };

  const handelGoogleSignWith=()=>{
    signInWithgoogle()
    .then(res=>{
      console.log(res)
     })
  }
   console.log(handelGoogleSignWith,"button click");
   

  return (
    <div className="font-serif">
      <div className="bg-[#4c82c971] lg:h-screen md:h-screen flex justify-center items-center">
        <div className="w-full lg:w-[800px] md:w-[700px] lg:h-[420px] shadow-2xl bg-[#26426d3b] flex flex-col lg:flex-row md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="w-full lg:w-[400px] md:px-2 px-5 flex md:border-e-2 justify-center lg:justify-start">
            <img src="../../public/llo.jpg" alt="" />
          </div>
          {/* Form Section */}
          <div className="w-full lg:w-[380px] px-2">
            <h1 className=" text-blue-700 lg:mt-8 mt-6 text-center font-extralight font-serif text-3xl">
              Welcome back
            </h1>

            {/* Form section */}
            <div className="w-full mx-auto">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                  >
                    <MdOutlineMarkEmailUnread className=" text-xl" />
                    <input
                      type="email"
                      className="grow"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <p className=" text-red-500 font-medium">
                      email is required
                    </p>
                  )}
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
                      {...register("password", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <p className=" text-red-500 font-medium">
                      Password is required
                    </p>
                  )}
                </div>

                <p className=" text-blue-500 mt-2">Forgot Password?</p>

                <button className="bg-blue-500 border-none btn btn-block mt-3">
                  Login Now
                </button>

                <h1 className="text-white ml-4 py-1  ">
                  Don't have an account?
                  <span className="ml-2  text-blue-700">
                    <Link to={"/registar"}> Signup </Link>
                  </span>
                </h1>
               
              </form>
              <div className=" flex gap-5 justify-center w-full mx-auto">
                  <button className="btn btn-primary" onClick={handelGoogleSignWith}>
                    google
                    </button>
                    <button>
                      twiter
                      </button>
                      <button>
                         facebook
                      </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
