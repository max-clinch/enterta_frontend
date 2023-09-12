import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../assets/img/landing.png";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { ReactComponent as Scroll } from "../../assets/svg/Scroll.svg";
import { ReactComponent as Mic } from "../../assets/svg/ep_mic.svg";
import { ReactComponent as Listen } from "../../assets/svg/listener.svg";

const Landing = () => {
  const navigate = useNavigate();
  const disconnectMetaMask = async () => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      try {
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
        console.log("Disconnected from MetaMask");
        // Optionally, you can reset your application's state or perform other actions here
      } catch (error) {
        console.error("Error disconnecting from MetaMask:", error);
      }
    } else {
      console.log("MetaMask not detected or already disconnected");
    }
  };

  useEffect(() => {
    // disconnectMetaMask();
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="relative bg-black text-white font-jarkata w-full h-screen">
        <img src={Hero} className="w-full object-cover" alt="gero" />
        <div className="absolute mt-10 ml-20 top-0">
          <div>
            <Logo />
          </div>
          <div className="mt-40 text-6xl font-bold">
            Unleashing Potentials, <br />
            Connecting Hearts.
          </div>
          <div className="mt-10 font-normal">
            Empowering Artists and Fans Alike in the Digital Age
          </div>
          <div className="mt-20">
            <Scroll />
          </div>
        </div>
        <div className="w-full bg-black flex p-10 -mt-20 justify-center gap-5">
          <div
            className="w-full cursor-pointer bg-black h-[572px] flex flex-col justify-center border-[#434141] border rounded-lg text-center"
            onClick={() => navigate("/registration-artist")}
          >
            <div className="flex justify-center mt-20 mb-10">
              <Mic />
            </div>
            <div className="font-semibold my-5 text-xl">For Artists</div>
            <div className="mb-20">
              Elevate your earnings (Royalty Transparency), Craft your <br />
              digital identity, and engage your fanbase.
            </div>
          </div>

          <div
            className="w-full cursor-pointer bg-black h-[572px] flex flex-col justify-center border-[#434141] border rounded-lg text-center"
            onClick={() => navigate("/registration-listener")}
          >
            <div className="flex justify-center mt-20 mb-10">
              <Listen />
            </div>
            <div className="font-semibold my-5 text-xl">For Listener</div>
            <div className="mb-20">
              Seamlessly engage and support your favorites. <br />
              Get access to exclusive content.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
