import React from "react";
import token from "../../../../assets/img/tokenimg.png";

const Tokens = () => {
  return (
    <>
      <div className="rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-5 text-white flex font-jarkata">
        {/* <div className="mt-5 font-semibold text-xl">Tokens</div> */}
        <div className="bg-[#191919] rounded-xl p-5 border border-[#2F2F2F]">
          <div>
            <div>
              <img src={token} alt="" />
            </div>
            <div className="text-xl font-semibold">Name of Token</div>
            <div className="text-sm font-normal">Song title</div>
            <div className="flex items-center mt-3 justify-between">
              <div className="text-xl text-[#FDD01E] font-semibold">0.41ETH</div>
              <div className="text-sm">2,500 Available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokens;
