import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { IoMdAddCircleOutline, IoMdContacts } from "react-icons/io";
import {
  MdDashboard,
  MdDashboardCustomize,
  MdHome,
  MdOutlineBorderColor,
} from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";
import UserData from "../hooks/UserData";

const DeshboardLayout = () => {
  const data = UserData();
  // console.log(data);

  return (
    <div>
      <div className="drawer md:drawer-open font-bold">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start ">
          {/* Page content here */}

          <div className=" flex items-center justify-between mx-2 ">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button md:hidden"
            >
              <MdDashboardCustomize />
            </label>
          </div>

          <div className="  bg-blue-300 w-full h-full  ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {data && (
            <ul className="menu p-4 w-52 min-h-full bg-[#589af1c7] text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link
                  className="flex text-2xl font-thin justify-start gap-10"
                  to={"/"}
                >
                  <h3> Gadget</h3>
                  <span className="badge text-xm ">{data.role}</span>
                </Link>
              </li>
              <hr className="mb-2 mt-1" />
              <li>
                <Link to={"/dashboard"}>
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              {data.role === "seller" && (
                <li>
                  <Link to="/deshboard/myproduct">
                    <FaUsers /> My Product
                  </Link>
                </li>
              )}
              <li>
                <Link to={"/dashboard/managebooking"}>
                  <FaBagShopping /> Manage Booking
                </Link>
              </li>
              {data.role === "seller" && (
                <li>
                  <Link to="/deshboard/add-product">
                    <IoMdAddCircleOutline /> Add Product
                  </Link>
                </li>
              )}
              {data.role === "seller" && (
                <li>
                  <Link to={"/dashboard/manageItem"}>
                    <TiEdit /> Manage Items
                  </Link>
                </li>
              )}
              <li className="mt-10">
                <hr />
                <Link to={"/"}>
                  <MdHome /> Home
                </Link>
              </li>
              <li>
                <Link to={"/order-Tracking"}>
                  <MdOutlineBorderColor /> Order Tracking
                </Link>
              </li>
              <li>
                <Link to={"/order-Tracking"}>
                  <IoMdContacts /> Customer Support
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeshboardLayout;
