import React, { useEffect, useState } from "react";
import Hero from "../../../../assets/img/registeruser.png";
import { ReactComponent as Logo } from "../../../../assets/svg/Logo.svg";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import Meta from "../../../../assets/img/meta.png";
import Coin from "../../../../assets/img/coinbase.png";
import { useFormik } from "formik";
import CenterModal from "../../../../components/Modal/CenterModal";
import { entertaABI, entertaContract } from "../../../../constant/constants";

const RegisterAsListener = () => {
  const web3 = new Web3(window.ethereum);
  const [showWalletModal, toggleWalletShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");

  const EntertaBlockABI = entertaABI.abi;
  const EntertacontractAddress = entertaContract;

  const entertaContractBind = new web3.eth.Contract(
    EntertaBlockABI,
    EntertacontractAddress
  );

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
  });

  const isWeb3Available = () => {
    return Boolean(window.ethereum);
  };

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

  useEffect(() => {
    if (selectedAccount !== "") {
      navigate("/listener/dashboard/overview");
    }
  }, [selectedAccount]);

  const { handleChange, values } = formik;
  return (
    <>
      <div className="grid grid-cols-1 font-jarkata md:grid-cols-2">
        <div className=" relative text-white h-screen">
          <img src={Hero} className="h-screen w-full object-cover" alt="hero" />
          <div className="absolute mt-10 ml-20 top-0">
            <div>
              <Logo />
            </div>
            <div className="mt-96 text-6xl font-bold">
              Empower your <br />
              <span className="italic">faves</span> directly
            </div>
          </div>
        </div>

        <div className="w-full text-left h-screen flex justify-center items-center text-white bg-[#1E1E1E]">
          <div className="w-7/12 space-y-5">
            <div className="text-2xl font-bold">Register as a Listener</div>
            <div>Connect your wallet to get started</div>
            <div onClick={() => toggleWalletShowModal(true)}>
              <CustomButton
                labelText={"Connect Wallet"}
                buttonVariant="primary"
              />
            </div>
          </div>
        </div>
      </div>

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

export default RegisterAsListener;
