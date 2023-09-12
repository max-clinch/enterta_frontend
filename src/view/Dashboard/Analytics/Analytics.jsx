import React from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart } from "react-minimal-pie-chart";

const Analytics = () => {
  const data = [
    { name: "Jan", uv: 550, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 800, pv: 1398, amt: 2210 },
    { name: "Mar ", uv: 900, pv: 9800, amt: 2290 },
    { name: "Apr ", uv: 400, pv: 3908, amt: 2000 },
    { name: "May ", uv: 1000, pv: 4800, amt: 2181 },
    { name: "Jun ", uv: 300, pv: 3800, amt: 2500 },
    { name: "Jul ", uv: 700, pv: 4300, amt: 2100 },
    { name: "Sep ", uv: 500, pv: 3200, amt: 2400 },
    { name: "Oct ", uv: 600, pv: 9800, amt: 2290 },
    { name: "Nov ", uv: 200, pv: 3908, amt: 2000 },
    { name: "Dec ", uv: 100, pv: 4800, amt: 2181 },
  ];

  return (
    <>
      <DashboardWrapper>
        <div className="text-white flex justify-between items-center mt-10 mx-20">
          <div className="font-semibold text-2xl font-jarkata">Analytics</div>
          <div className="space-x-3">
            <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
              <option value="">All Songs</option>
            </select>
            <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <div className="mx-20 font-jarkata grid gap-5 grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-10 text-white font-jarkata">
            <div className="flex justify-between items-center ">
              <div>
                <div className="text-sm">Streams</div>
                <div className="text-3xl font-semibold">5,300</div>
              </div>
              <div>
                <select className="text-white py-2 px-2 rounded-full items-center bg-[#2F2F2F] border border-[#434141]">
                  <option value="2023">All Platforms</option>
                </select>
              </div>
            </div>

            <div className="w-full mt-5">
              <LineChart width={650} height={400} data={data}>
                <Line
                  type="monotone"
                  dataKey="uv"
                  strokeWidth={3}
                  stroke="#FF0202"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </div>
          </div>

          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Top Listeners</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-between items-center">
              <div>Nigeria</div>
              <div>60%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>United States</div>
              <div>20%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Germany</div>
              <div>10%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Australia</div>
              <div>10%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Portugal</div>
              <div>60%</div>
            </div>
          </div>
        </div>

        <div className="mx-20 font-jarkata grid gap-5 grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Top Listeners</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-between items-center">
              <div>Nigeria</div>
              <div>60%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>United States</div>
              <div>20%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Germany</div>
              <div>10%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Australia</div>
              <div>10%</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Portugal</div>
              <div>60%</div>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Top Music</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-between items-center">
              <div>Ginger me body</div>
              <div>3,090,900 plays</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Ginger me body</div>
              <div>3,090,900 plays</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Ginger me body</div>
              <div>3,090,900 plays</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Ginger me body</div>
              <div>3,090,900 plays</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Ginger me body</div>
              <div>3,090,900 plays</div>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Demographics</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-center pb-10">
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#5570F1" },
                  { title: "Two", value: 15, color: "#97A5EB" },
                  { title: "Three", value: 20, color: "#FFCC91" },
                ]}
                style={{ height: "200px", width: "auto" }}
                lineWidth={25} // Set the width of the donut chart (adjust as needed)
                segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Analytics;
