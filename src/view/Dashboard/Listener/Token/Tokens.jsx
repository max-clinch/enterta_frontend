import React, { useState } from "react";
import DashboardListenerWrapper from "../../../../components/layout/DashhboardListenerWrapper";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import token from "../../../../assets/img/tokenimg.png";
import CenterModal from "../../../../components/Modal/CenterModal";
import { TextInput } from "../../../../components/reusables/TextInput";
import { useFormik } from "formik";
import { ReactComponent as Success } from "../../../../assets/svg/successcircle.svg";
import { useNavigate } from "react-router-dom";

const Tokens = () => {
  const formik = useFormik({
    initialValues: {
      units: "",
    },
  });

  const [acquireToken, toggleAcquireToken] = useState(false);
  const [showModal, toggleShowModal] = useState(false);

  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = formik;
  return (
    <>
      <DashboardListenerWrapper>
        <div className="mx-20 rounded-3xl  h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-5 text-white flex font-jarkata">
          <div className="block bg-[#191919] rounded-xl p-5 border border-[#2F2F2F]">
            <div>
              <div>
                <img src={token} alt="" />
              </div>
              <div className="flex mt-3 justify-between items-center">
                <div>
                  <div className="text-xl font-semibold">Name of Token</div>
                  <div className="text-sm font-normal">Song title</div>
                </div>
                <div
                  className=""
                  onClick={() => toggleAcquireToken((prev) => !prev)}
                >
                  <button className="px-5 py-2 border rounded-full">
                    owned
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-3 justify-between">
                <div className="text-xl text-[#FDD01E] font-semibold">
                  0.41ETH
                </div>
                <div className="text-sm">2 Units</div>
              </div>
            </div>
          </div>
        </div>
      </DashboardListenerWrapper>

      {acquireToken && (
        <CenterModal title={"Acquire (Name) Token"}>
          <div className="text-white font-jarkata space-y-4">
            <div className="text-center">
              For every unit acquired, you are entitled to 0.001% of <br />{" "}
              royalties from this song
            </div>
            <div>
              <TextInput
                label="Units"
                name="units"
                placeHolder="2500max"
                handleChange={handleChange}
              />
            </div>
            <div className="text-[#FDD01E] font-semibold text-xl">0.41 ETH</div>
            <div className="flex justify-between">
              <div onClick={() => toggleShowModal((prev) => !prev)}>
                <CustomButton labelText={"Acquire Token"} />
              </div>
              <div>
                <button className="py-4 px-10 border rounded-full">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </CenterModal>
      )}

      {showModal && (
        <CenterModal showCloseIcon={false}>
          <div className="text-white font-jarkata space-y-3 flex flex-col justify-center items-center">
            <div>
              <Success />
            </div>
            <div className="text-xl font-semibold">Success</div>
            <div className="text-center">
              You have successfully acquired 2 units of <br /> (Artist token)
            </div>
            <div onClick={() => navigate("/listener/dashboard/overview")}>
              <CustomButton labelText={"Return to Dashboard"} />
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default Tokens;
