import SideNav from "./Sidenav";
import Topbar from "./Topbar";

const Layout = ({ className, children }) => {
  return (
    <>
      {/* <div
        className={`${
          className ? className : ""
        }flex flex-auto w-full  bg-cyan-400 `}
      >
        <SideNav />
        <div className="w-full bg-red-300">
          <Topbar />
          <div className="ml-8">{children}</div>
        </div>
      </div> */}
      {/* // */}

      <div className={`${className ? className : ""}flex flex-auto w-full`}>
        <SideNav />
        <div className="w-full ">
          <Topbar />
          <div className="lg:px-[60px] px-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
