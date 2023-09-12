import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../../../components/layout/DashboardWrapper";
import { ReactComponent as Music } from "../../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Success } from "../../../../assets/svg/successcircle.svg";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import CenterModal from "../../../../components/Modal/CenterModal";
import { TextInput } from "../../../../components/reusables/TextInput";
import DragDrop from "../../../../components/DnD/DragDrop";
import DragDropMp3 from "../../../../components/DnD/DragDropMp3";
import { useFormik } from "formik";
import useApiRequest from "../../../../utils/hooks/useApiRequest";
import { sendRelease, uploadFile } from "../../../../utils/apiURLs/requests";
import dayjs from "dayjs";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import {
  artistManagement,
  artistManagement1Contract,
  artistManagementContract,
  entertaABI,
  entertaContract,
  newABI,
  newContract,
} from "../../../../constant/constants";

const AddMusic = () => {
  const web3 = new Web3(window.ethereum);

  const EntertaBlockABI = entertaABI.abi;
  const EntertacontractAddress = entertaContract;

  const entertaContractBind = new web3.eth.Contract(
    EntertaBlockABI,
    EntertacontractAddress
  );

  const ArtistManagementABI = artistManagement.abi;

  const ArtistManagementAddress = artistManagementContract;
  const ArtistManagementAddress1 = artistManagement1Contract;

  const artistManagementBind = new web3.eth.Contract(
    ArtistManagementABI,
    ArtistManagementAddress1
  );

  const newAbi = newABI.abi;
  const newContractAddy = newContract;

  const newBind = new web3.eth.Contract(newAbi, newContractAddy);

  // Function to set work metadata
  async function setWorkMetadata(work, releaseDate, description, coverArtUrl) {
    try {
      // Get the accounts from the Web3 provider
      const accounts = await web3.eth.getAccounts();

      // Call the setWorkMetadata function
      const txReceipt = await newBind.methods
        .setWorkMetadata(work, releaseDate, description, coverArtUrl)
        .send({ from: accounts[0] });

      console.log("Transaction receipt:", txReceipt);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const [showModal, toggleShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioFile, setAudioFile] = useState("");
  const [imageFile, setImageFile] = useState("");
  const navigate = useNavigate();
  const makeRequest = useApiRequest();
  const handleImageSelect = (imageFile) => {
    // Handle the selected audio file here
    if (imageFile) {
      console.log("Selected audio file:", imageFile);
      setImageFile(imageFile);
      // Perform any further processing or state updates
    } else {
      console.log("Audio file removed.");
      // Handle file removal if needed
    }
  };

  const handleAudioSelect = (audioFile) => {
    // Handle the selected audio file here
    if (audioFile) {
      console.log("Selected audio file:", audioFile);
      setAudioFile(audioFile);
      // Perform any further processing or state updates
    } else {
      console.log("Audio file removed.");
      // Handle file removal if needed
    }
  };

  const UploadImage = async () => {
    setLoading(true);
    let formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    formData.append("file", imageFile);
    try {
      const response = await makeRequest.post(uploadFile, formData, config);
      setLoading(false);
      console.log(response?.data);
      console.log(response?.data?.image?.url);
      if (response?.data?.success) {
        setValues((prevValues) => ({
          ...prevValues,
          coverImage: response?.data?.image?.url,
        }));
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  const UploadSong = async () => {
    setLoading(true);
    let formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    formData.append("file", audioFile);
    try {
      const response = await makeRequest.post(uploadFile, formData, config);
      setLoading(false);
      console.log(response);
      console.log(response?.data?.image?.url);
      if (response?.data?.success) {
        setValues((prevValues) => ({
          ...prevValues,
          songUrl: response?.data?.image?.url,
        }));
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      language: "",
      genre: "",
      releaseDate: "",
      recordLabel: "",
      mainArtist: "",
      featuredArtists: "",
      coverImage: "",
      songUrl: "",
    },

    onSubmit: async (values) => {
      setLoading(true);
      const payload = {
        title: values?.title,
        language: values?.language,
        genre: values?.genre,
        releaseDate: dayjs(values?.releaseDate).format(
          "YYYY-MM-DD HH:mm:ss.SSSZ"
        ),
        recordLabel: values?.recordLabel,
        mainArtist: values?.mainArtist,
        // featuredArtists: values?.featuredArtists,
        coverImage: values?.coverImage,
        songUrl: values?.songUrl,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const response = await makeRequest.post(sendRelease, payload, config);
        console.log(response);
        setLoading(false);
        if (response?.data) {
          toggleShowModal(true);
        }
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    },
  });

  const { values, handleChange, handleSubmit, setValues } = formik;

  useEffect(() => {
    if (values?.coverImage && values?.songUrl) {
      handleSubmit();
    }
  }, [values?.coverImage && values?.songUrl]);

  return (
    <>
      <DashboardWrapper>
        <div className="bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 flex flex-col justify-center items-center mt-10 text-white font-jarkata mx-20">
          <div className=" w-full mt-10 mb-10 items-center">
            <div className="text-sm flex justify-start ml-40 text-[#FF0202] font-bold">
              ← Back
            </div>
            <div className="text-2xl flex justify-center font-bold">
              Release a Single
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div action="" className="w-4/12 py-10 space-y-5">
              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Upload Cover Art
                </label>
                <div className="mt-2.5">
                  <DragDrop onFileSelect={handleImageSelect} />
                </div>
              </div>
              <div className="">
                <TextInput
                  name="title"
                  label="Single Title"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <TextInput
                  name="language"
                  label="Language"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <TextInput
                  name="genre"
                  label="Genre"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <TextInput
                  name="releaseDate"
                  label="Release Date"
                  type="date"
                  placeHolder=""
                  handleChange={handleChange}
                  value={values?.releaseDate}
                />
              </div>
              <div className="">
                <TextInput
                  name="recordLabel"
                  label="Record Label (Optional)"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <TextInput
                  name="mainArtist"
                  label="Main Artist"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div className="">
                <TextInput
                  name="featuredArtists"
                  label="Featured Artist(s) (Optional)"
                  placeHolder=""
                  handleChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="">
                  Upload Song
                </label>
                <div className="mt-2.5">
                  <DragDropMp3 onFileSelect={handleAudioSelect} />
                </div>
              </div>
              <div
                onClick={() => {
                  UploadImage();
                  //   setWorkMetadata(
                  //     "Single",
                  //     dayjs(values?.releaseDate).format("YYYY-MM-DD"),
                  //     values?.title,
                  //     values?.coverImage
                  //   );
                  UploadSong();
                }}
              >
                <CustomButton
                  labelText={`${loading ? "Loading" : "Save & Continue"}`}
                  isDisabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardWrapper>

      {showModal && (
        <CenterModal showCloseIcon={false}>
          <div className="text-white font-jarkata space-y-3 flex flex-col justify-center items-center">
            <div>
              <Success />
            </div>
            <div>
              You have successfully submitted your <br /> single for review. Sit
              back and relax!
            </div>
            <div onClick={() => navigate("/dashboard/overview")}>
              <CustomButton labelText={"Return to Dashboard"} />
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default AddMusic;
