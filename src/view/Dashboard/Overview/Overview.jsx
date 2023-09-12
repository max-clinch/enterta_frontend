import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { ReactComponent as Music } from "../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Single } from "../../../assets/svg/single.svg";
import { CustomButton } from "../../../components/buttons/CustomButton";
import CenterModal from "../../../components/Modal/CenterModal";
import Meta from "../../../assets/img/meta.png";
import Coin from "../../../assets/img/coinbase.png";
import Web3 from "web3";
import {
  artistManagement,
  artistManagement1Contract,
  artistManagementContract,
  backupABI,
  backupContract,
  entertaABI,
  entertaContract,
  newABI,
  newContract,
} from "../../../constant/constants";
import useGetReleases from "./hooks/useGetReleases";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const web3 = new Web3(window.ethereum);
  const navigate = useNavigate();

  const { handleReleases, releases } = useGetReleases();

  useEffect(() => {
    handleReleases();
  }, []);

  //   const EntertaBlockABI = entertaABI.abi;
  //   const EntertacontractAddress = entertaContract;

  //   const ArtistManagementABI = artistManagement.abi;
  const newAbi = newABI.abi;

  //   const ArtistManagementAddress = artistManagementContract;
  //   const ArtistManagementAddress1 = artistManagement1Contract;
  const newContractAddy = newContract;

  const newBind = new web3.eth.Contract(newAbi, newContractAddy);

  //   const artistManagementBind = new web3.eth.Contract(
  //     ArtistManagementABI,
  //     ArtistManagementAddress1
  //   );

  const backupNewABI = backupABI.abi;
  const backupContractAddy = backupContract;

  const backupBind = new web3.eth.Contract(backupNewABI, backupContractAddy);

  const wallet = localStorage?.getItem("wallet");
  const firstName = localStorage?.getItem("firstName");
  const password = localStorage?.getItem("password");
  const lastName = localStorage?.getItem("lastName");
  const emailAddress = localStorage?.getItem("email");
  const stageName = localStorage?.getItem("stageName");

  //   const entertaContractBind = new web3.eth.Contract(
  //     EntertaBlockABI,
  //     EntertacontractAddress
  //   );

  const registerUser = async () => {
    try {
      const receipt = await backupBind.methods
        .registerArtist(emailAddress, password, firstName, lastName, stageName)
        .send({ from: localStorage?.getItem("wallet") }); // Replace with the sender's address
      console.log("Transaction receipt:", receipt);
      if (receipt) {
        alert("Success");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [showModal, toggleShowModal] = useState(false);
  const [showWalletModal, toggleWalletShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");

  const isWeb3Available = () => {
    return Boolean(window.ethereum);
  };

  useEffect(() => {
    if (wallet === null) {
      toggleWalletShowModal(true);
    }
  }, []);

  const connectWithMetaMask = async () => {
    if (isWeb3Available()) {
      // Check if MetaMask is the selected wallet
      if (window.ethereum.isMetaMask) {
        await window.ethereum
          .enable() // Force MetaMask prompt
          .then(async (accounts) => {
            // Handle successful connection
            // Store the selected account address for future use
            const selectedWalletAccount = accounts[0];
            setSelectedAccount(selectedWalletAccount);
            localStorage.setItem("wallet", selectedWalletAccount);
            toggleWalletShowModal(false);

            // Call the registerUser function here
            // await registerUser();
          })
          .catch((error) => {
            // Handle connection error
            console.error("MetaMask connection error:", error);
          });
      } else {
        // MetaMask not detected
        console.error("MetaMask not detected.");
      }
    } else {
      // Web3 provider not available
      console.error("Web3 provider not found.");
    }
  };

  // to hide characters
  function hideCharacters(str) {
    if (str?.length <= 9) {
      return str; // Return the original string if it's 9 characters or less
    }

    const firstFive = str?.slice(0, 5); // Get the first 5 characters
    const lastFour = str?.slice(-4); // Get the last 4 characters

    const hiddenCharacters = "..."; // Hide the middle characters with asterisks

    return firstFive + hiddenCharacters + lastFour; // Concatenate the parts and return the result
  }

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
          <div className="mx-20 grid gap-5 grid-cols-4">
            <div className="w-full h-auto col-span-2 bg-[#1E1E1E] p-5 border border-[#2F2F2F] space-y-5 mt-10 text-white rounded-3xl font-jarkata ">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Top Releases</div>
                <div onClick={() => toggleShowModal((prev) => !prev)}>
                  <CustomButton labelText={"+ New Release"} />
                </div>
              </div>
              <hr className="border border-[#2F2F2F]" />
              <div className="space-y-5">
                {releases?.slice(0, 4)?.map((items, index) => (
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
                        <div>
                          <div
                            className="text-[#44FF02] tex-xs cursor-pointer"
                            onClick={() =>
                              navigate("/dashboard/music/split-royalties")
                            }
                          >
                            Split Royalties
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="border border-[#2F2F2F]" />
                  </>
                ))}
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

            <div className="col-span-1 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-10 text-white font-jarkata">
              <div className="text-xl font-semibold">Wallet</div>
              <hr className="border border-[#2F2F2F]" />
              {wallet !== "" ? (
                <div className="">
                  <div>Wallet Connected</div>
                  {hideCharacters(wallet)}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <div>Receive your royalties and earning with ease</div>
                  <div onClick={() => connectWithMetaMask()}>
                    <CustomButton
                      labelText={"Connect Wallet"}
                      variant="primary"
                    />
                  </div>
                </div>
              )}
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
            <div
              onClick={() => navigate("/dashboard/music/add-music")}
              className="text-white p-10 bg-[#2F2F2F] border border-[#434141] rounded-xl flex flex-col justify-center items-center"
            >
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

      {showWalletModal && (
        <CenterModal title="Connect Wallet">
          <div className="w-full flex gap-5 justify-center">
            <div
              className="border cursor-pointer p-5 rounded-xl"
              style={{ width: "100px" }}
              onClick={() => connectWithMetaMask()}
            >
              <img
                src={Meta}
                className="object-contain w-full h-full"
                alt="meta"
              />
            </div>
            <div
              className="border cursor-pointer p-5 rounded-xl"
              style={{ width: "100px" }}
            >
              <img
                src={Coin}
                className="object-contain w-full h-full"
                alt="coin"
              />
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default Overview;
