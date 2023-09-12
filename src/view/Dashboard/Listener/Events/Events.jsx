import React, { useState } from "react";
import token from "../../../../assets/img/tokenimg.png";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import CenterModal from "../../../../components/Modal/CenterModal";
import { TextInput } from "../../../../components/reusables/TextInput";
import { useFormik } from "formik";
import { ReactComponent as Success } from "../../../../assets/svg/successcircle.svg";
import { useNavigate } from "react-router-dom";

const Events = () => {
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
      <div className="rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-5 text-white flex font-jarkata">
        <div>
          <div className="text-2xl font-semibold">Upcoming</div>
          <div className="flex gap-20 mt-10">
            <div>
              <div>Emmykeys at 04 Arena live</div>
              <div className="text-[#FBC814]">View Details</div>
            </div>
            <div className="space-x-3">
              <button className="py-2 px-10 text-center border rounded-full">
                0.032 ETH
              </button>
              <button className="py-2 px-10 text-center border rounded-full">
                Pay with 2Tokens
              </button>
            </div>
          </div>
        </div>
      </div>

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

export default Events;
