import React, { useState } from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { ReactComponent as Apple } from "../../../assets/svg/apple.svg";
import { ReactComponent as Yt } from "../../../assets/svg/yt.svg";
import { ReactComponent as Spotify } from "../../../assets/svg/spotify.svg";
import profile from "../../../assets/img/profileimg.png";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import { CustomButton } from "../../../components/buttons/CustomButton";
import About from "./components/About";
import Tokens from "./components/Tokens";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  return (
    <>
      <DashboardWrapper>
        <div className="mx-20 font-jarkata">
          <div className="rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-10 text-white font-jarkata">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <img src={profile} alt="" />
                <div>
                  <div className="font-semibold text-xl">Emmykeys</div>
                  <div className="font-normal text-[#939393] text-sm">
                    Artist / Songwriter
                  </div>
                  <button className="text-sm border mt-5 rounded-full py-2 px-3">
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Apple />
                <Yt />
                <Spotify />
              </div>
            </div>
          </div>

          <div className="rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-5 text-white font-jarkata">
            <div className="flex gap-10">
              <div
                className="cursor-pointer"
                onClick={() => setSelectedTab("about")}
              >
                About
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setSelectedTab("discography")}
              >
                Discography
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setSelectedTab("tokens")}
              >
                Tokens
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setSelectedTab("review")}
              >
                Review
              </div>
            </div>
          </div>

          {selectedTab === "about" && <About />}
          {selectedTab === "tokens" && <Tokens />}
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Profile;
