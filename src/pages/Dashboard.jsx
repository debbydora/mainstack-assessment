import Layout from "../components/layout/Layout";
import sun from ".././assets/icons/sun-cloud.png";
import UseDatas from "../data/UseDatas";
import Button from "../components/Button";
import AreaChart from "../components/charts/Areachart";
import Donutchart from "../components/charts/Donutchart";
import Piechart from "../components/charts/Piechart";

const Dashboard = () => {
  const { btnTitles, flags, socials } = UseDatas();

  return (
    <Layout>
      <div className="mt-6">
        {/* first */}
        <div className="block lg:flex justify-between  items-center ">
          <div>
            <div className="flex justify-between">
              <span className=" text-fontblack font-bold text-2xl -tracking-[0.015em]">
                Good morning, Blessing
              </span>
              <img src={sun} alt="sun" className="w-8 h-8 ml-1" />
            </div>
            <p className="text-sm leading-6 text-fontblack mt-2">
              Check out your dashboard summary.
            </p>
          </div>
          <p className="text-orange text-sm leading-6 cursor-pointer">
            View analytics
          </p>
        </div>
        {/* second */}
        <div className="flex flex-wrap gap-3 gap-x-4 lg:gap-3 mt-6 w-full">
          {btnTitles.map((btn, index) => (
            <Button
              key={index}
              title={btn}
              className={`${
                btn === "All Time"
                  ? "border-orange text-orange bg-[#FFDDCD]"
                  : ""
              }`}
            />
          ))}
        </div>
        {/* third */}
        <div className="border-bordergray border rounded-2xl mt-8 flex flex-col px-6 py-8 ">
          <p className="text-fontblack text-lg leading-6 -tracking-[0.015em] font-bold">
            Page views
          </p>
          <p className="text-navColor mt-2 text-sm">All time</p>
          <h1 className="text-fontblack text-5xl leading-[120%] font-bold -tracking-[0.015em] mt-6">
            500
          </h1>
          <AreaChart />
        </div>
        {/* fourth */}
        <div className="flex flex-col lg:flex-row w-full justify-between mt-4 gap-4 mb-4">
          {/* one */}
          <div className="border-bordergray border rounded-2xl mt-6 flex flex-col p-4 pr-2 w-full">
            {/* text */}
            <div className="flex justify-between">
              <p className="text-fontblack text-lg leading-6 -tracking-[0.015em] font-bold">
                Top Locations
              </p>
              <p className="text-orange text-sm leading-[22px] cursor-pointer">
                View full reports
              </p>
            </div>

            <div className=" flex items-center lg:mt-4">
              {/* flags */}
              <div className="lg:flex flex-col gap-2.5 mt-10 hidden">
                {flags.map((map, index) => (
                  <img
                    key={index}
                    src={map}
                    alt=""
                    className="w-[21px] h-[15px] lg:mr-2 mr-2"
                  />
                ))}
              </div>
              <Donutchart />
            </div>
          </div>
          {/* two */}
          <div className="border-bordergray border rounded-2xl mt-6 flex flex-col p-4 pr-2 w-full">
            {/* text */}
            <div className="flex justify-between">
              <p className="text-fontblack text-lg leading-6 -tracking-[0.015em] font-bold">
                Top Referral source
              </p>
              <p className="text-orange text-sm leading-[22px] cursor-pointer">
                View full reports
              </p>
            </div>
            {/* graph */}
            <div className="mt-4 flex items-center">
              {/* flags */}
              <div className=" lg:flex flex-col gap-2 mt-2 hidden">
                {socials.map((map, index) => (
                  <img
                    key={index}
                    src={map}
                    alt=""
                    className="w-[21px] h-[15px] mr-2 lg:mr-2"
                  />
                ))}
              </div>
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
