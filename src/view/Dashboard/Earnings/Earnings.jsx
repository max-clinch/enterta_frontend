import React, { useState } from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import Meta from "../../../assets/img/meta.png";
import Coin from "../../../assets/img/coinbase.png";
import { CustomButton } from "../../../components/buttons/CustomButton";
import { entertaABI, entertaContract } from "../../../constant/constants";
import Web3 from "web3";
import CenterModal from "../../../components/Modal/CenterModal";

const Earnings = () => {
  const web3 = new Web3(window.ethereum);
  const wallet = localStorage?.getItem("wallet");
  const EntertaBlockABI = entertaABI.abi;
  const EntertacontractAddress = entertaContract;

  const entertaContractBind = new web3.eth.Contract(
    EntertaBlockABI,
    EntertacontractAddress
  );

  const isWeb3Available = () => {
    return Boolean(window.ethereum);
  };

  const [showModal, toggleShowModal] = useState(false);
  const [showWalletModal, toggleWalletShowModal] = useState(false);

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
            // setSelectedAccount(selectedWalletAccount);
            localStorage.setItem("wallet", selectedWalletAccount);
            toggleWalletShowModal(false);

            // Call the registerUser function here
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
    if (str.length <= 9) {
      return str; // Return the original string if it's 9 characters or less
    }

    const firstFive = str.slice(0, 5); // Get the first 5 characters
    const lastFour = str.slice(-4); // Get the last 4 characters

    const hiddenCharacters = "..."; // Hide the middle characters with asterisks

    return firstFive + hiddenCharacters + lastFour; // Concatenate the parts and return the result
  }

  return (
    <>
      <DashboardWrapper>
        <div className="text-white flex justify-between items-center mt-10 mx-20">
          <div className="font-semibold text-2xl font-jarkata">Earnings</div>
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
          <div className="col-span-1 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 p-5 mt-10 text-white font-jarkata">
            <div className="text-xl font-semibold">Wallet</div>
            <hr className="border border-[#2F2F2F]" />
            {wallet !== "" ? (
              <div className="">
                <div>Wallet Connected, Receiving Royalties here:</div>
                {hideCharacters(wallet)}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div>Receive your royalties and earning with ease</div>
                <div onClick={() => toggleWalletShowModal(true)}>
                  <CustomButton
                    labelText={"Connect Wallet"}
                    variant="primary"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
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
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <td>Country</td>
                  <td>Streams</td>
                  <td>Total Revenue</td>
                  <td>Net Payable</td>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>5,720,394</td>
                  <td>5.7ETH</td>
                  <td>1.124ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-20 font-jarkata grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Token</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="flex justify-between items-center">
              <div>Nigeria</div>
              <div>6993</div>
            </div>
            <div className="flex justify-between items-center">
              <div>United States</div>
              <div>2000</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Germany</div>
              <div>700</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Australia</div>
              <div>300</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Portugal</div>
              <div>200</div>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-3xl w-full h-auto bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 mt-10 text-white font-jarkata ">
            <div className="text-xl font-semibold">Activity</div>
            <hr className="border border-[#2F2F2F]" />
            <div className="text-center">No Activity Yet</div>
          </div>
        </div>
      </DashboardWrapper>

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

export default Earnings;
