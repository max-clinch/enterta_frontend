import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { ReactComponent as MusicIcon } from "../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Single } from "../../../assets/svg/single.svg";
import { CustomButton } from "../../../components/buttons/CustomButton";
import CenterModal from "../../../components/Modal/CenterModal";
import useGetReleases from "../Overview/hooks/useGetReleases";

const Music = () => {
  const [showModal, toggleShowModal] = useState(false);
  const { handleReleases, releases } = useGetReleases();

  useEffect(() => {
    handleReleases();
  }, []);

  const firstName = localStorage?.getItem("firstName");

  return (
    <>
      <DashboardWrapper>
        {releases?.length <= 0 ? (
          <div className="h-[573px] bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 flex flex-col justify-center items-center mt-10 text-white rounded-3xl font-jarkata mx-20">
            <div className="flex flex-col items-center justify-center space-y-3">
              <div>
                <Music />
              </div>
              <div className="font-semibold text-center text-2xl">
                Welcome {firstName}!
                <br />
                Release your first track
              </div>
              <div onClick={() => toggleShowModal((prev) => !prev)}>
                <CustomButton labelText={"+  Add New Release"} />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-20 grid gap-5 grid-cols-2">
            <div className="w-full h-auto col-span-1 bg-[#1E1E1E] p-5 border border-[#2F2F2F] space-y-5 mt-10 text-white rounded-3xl font-jarkata ">
              <div className="space-y-5">
                {releases?.slice(0, 5)?.map((items, index) => (
                  <>
                    <div className="flex items-center gap-5">
                      <div>{index + 1}.</div>
                      <div>
                        <img
                          src={`${items?.coverImage}`}
                          className="w-[68px] h-[68px] rounded-xl"
                          alt=""
                        />
                      </div>
                      <div>
                        <div>{items?.title}</div>
                        <div>5,133</div>
                      </div>
                    </div>
                    <hr className="border border-[#2F2F2F]" />
                  </>
                ))}
              </div>
            </div>

            <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
              <div className="space-y-5">
                {releases?.slice(5, 10)?.map((items, index) => (
                  <>
                    <div className="flex items-center gap-5">
                      <div>{index + 1}.</div>
                      <div>
                        <img
                          src={`${items?.coverImage}`}
                          className="w-[68px] h-[68px] rounded-xl"
                          alt=""
                        />
                      </div>
                      <div>
                        <div>{items?.title}</div>
                        <div>5,133</div>
                      </div>
                    </div>
                    <hr className="border border-[#2F2F2F]" />
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </DashboardWrapper>

      {showModal && (
        <CenterModal
          handleClose={() => toggleShowModal((prev) => !prev)}
          width=""
        >
          <div className="text-white text-center font-semibold text-xl mb-10">
            I want to release
          </div>
          <div className="flex gap-5 justify-between w-full">
            <div className="text-white p-10 bg-[#2F2F2F] border border-[#434141] rounded-xl flex flex-col justify-center items-center">
              <div>
                <Single />
              </div>
              <div className="font-semibold text-xl">A Single</div>
            </div>

            <div className="text-white p-10 bg-[#2F2F2F] border border-[#434141] rounded-xl flex flex-col justify-center items-center">
              <div>
                <Single />
              </div>
              <div className="font-semibold text-xl">An Album</div>
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default Music;
