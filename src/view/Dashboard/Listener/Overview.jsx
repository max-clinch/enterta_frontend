import React, { useState } from "react";
import { ReactComponent as Apple } from "../../../assets/svg/apple.svg";
import { ReactComponent as Yt } from "../../../assets/svg/yt.svg";
import { ReactComponent as Spotify } from "../../../assets/svg/spotify.svg";
import profile from "../../../assets/img/profileimg.png";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import DashboardListenerWrapper from "../../../components/layout/DashhboardListenerWrapper";

const ListenerOverview = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  const navigate = useNavigate()
  return (
    <>
      <DashboardListenerWrapper>
        <div className="mx-20 text-white font-jarkata text-3xl font-semibold">
          <div>Welcome</div>
        </div>
        <div className="mx-20 mt-10 text-white font-jarkata text-xl font-semibold">
          <div>Discover Artists</div>
        </div>
        <div className="flex gap-5 mx-20 font-jarkata">
          <div className="w-full rounded-3xl h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-10 mt-10 text-white font-jarkata">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={profile} alt="" />
              <div className="text-center">
                <div className="font-semibold text-xl">Emmykeys</div>
                <div className="font-normal text-[#939393] text-sm">
                  Artist / Songwriter
                </div>
                <button onClick={() => navigate("/listener/dashboard/fav")} className="text-sm border mt-5 rounded-full py-2 px-3">
                  + Add to favorites
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-3xl h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-10 mt-10 text-white font-jarkata">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={profile} alt="" />
              <div className="text-center">
                <div className="font-semibold text-xl">Soprano</div>
                <div className="font-normal text-[#939393] text-sm">
                  Artist / Songwriter
                </div>
                <button className="text-sm border mt-5 rounded-full py-2 px-3">
                  + Add to favorites
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-3xl h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-10 mt-10 text-white font-jarkata">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={profile} alt="" />
              <div className="text-center">
                <div className="font-semibold text-xl">Janelle</div>
                <div className="font-normal text-[#939393] text-sm">
                  Artist / Songwriter
                </div>
                <button className="text-sm border mt-5 rounded-full py-2 px-3">
                  + Add to favorites
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-3xl h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-10 mt-10 text-white font-jarkata">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src={profile} alt="" />
              <div className="text-center">
                <div className="font-semibold text-xl">Jarkat</div>
                <div className="font-normal text-[#939393] text-sm">
                  Artist / Songwriter
                </div>
                <button className="text-sm border mt-5 rounded-full py-2 px-3">
                  + Add to favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardListenerWrapper>
    </>
  );
};

export default ListenerOverview;
