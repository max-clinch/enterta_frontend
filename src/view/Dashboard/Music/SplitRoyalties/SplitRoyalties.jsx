import React, { useState } from "react";
import DashboardWrapper from "../../../../components/layout/DashboardWrapper";
import { ReactComponent as Music } from "../../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Single } from "../../../../assets/svg/single.svg";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import CenterModal from "../../../../components/Modal/CenterModal";
import { TextInput } from "../../../../components/reusables/TextInput";
import Web3 from "web3";
import { entertaABI, entertaContract } from "../../../../constant/constants";

const SplitRoyalties = () => {
  const web3 = new Web3(window.ethereum);

  const EntertaBlockABI = entertaABI.abi;
  const EntertacontractAddress = entertaContract;

  const entertaContractBind = new web3.eth.Contract(
    EntertaBlockABI,
    EntertacontractAddress
  );

  const [showModal, toggleShowModal] = useState(false);
  const wallet = localStorage?.getItem("wallet");
  const [collaborators, setCollaborators] = useState([
    { name: wallet, percentage: "100" }, // Initial collaborator
  ]);

  console.log(collaborators);

  const filteredNames = collaborators.map((collaborator) => collaborator.name);

  const handleAddCollaborator = () => {
    // Add a new collaborator with empty percentage
    setCollaborators([...collaborators, { name: "", percentage: "" }]);
  };

  const handleRemoveCollaborator = (index) => {
    // Skip removing the initial collaborator
    if (index === 0) {
      return;
    }

    // Remove the collaborator at the given index
    const newCollaborators = [...collaborators];
    newCollaborators.splice(index, 1);
    setCollaborators(newCollaborators);
  };

  const handleCreateCollaboration = async () => {
    try {
      // Assume you have collaborators in an array, modify as per your use case
      const collaboratorsArray = [...filteredNames];
      console.log(collaboratorsArray);

      const accounts = await web3.eth.getAccounts();
      const owner = accounts[0]; // This should be the owner's Ethereum address

      const contractFunction =
        entertaContractBind.methods.createCollaboration(collaboratorsArray);
      const gas = await contractFunction.estimateGas({ from: owner });

      await contractFunction.send({ from: owner, gas });

      // Refresh collaborators list
      setCollaborators([...collaborators, ...collaboratorsArray]);
    } catch (error) {
      console.error("Error creating collaboration:", error);
      alert("Artist not registered")
    }
  };

  return (
    <>
      <DashboardWrapper>
        <div className="bg-[#1E1E1E] border border-[#2F2F2F] space-y-5  justify-center items-center mt-10 text-white font-jarkata mx-20">
          <div className=" w-full mt-10 mb-10 items-center">
            <div className="text-sm flex justify-start ml-40 text-[#FF0202] font-bold">
              ← Back
            </div>
            <div className="text-2xl flex justify-center font-bold">
              Release a Single
            </div>
          </div>
          <div className="w-full pt-10 pb-3 flex flex-col items-center justify-center">
            <div className="w-5/12 bg-[#191919] px-5 py-10 rounded-2xl">
              <div className="flex justify-between mb-5">
                <div className="text-xl">Revenue Spliting</div>
                <div>Name of Track</div>
              </div>
              <hr className="border border-[#2F2F2F]" />
              <div className="flex justify-between pt-5 text-[#B3B3B3] font-light mb-5">
                <div className="">Co1llaborator</div>
                <div className="">Share</div>
              </div>
              {collaborators.map((collaborator, index) => (
                <div key={index} className="flex justify-between pb-5">
                  <div className="font-semibold">
                    <input
                      type="text"
                      placeholder="Collaborator Name"
                      className="text-white py-2 px-2 rounded-xl bg-[#2F2F2F] border border-[#434141]"
                      value={collaborator.name}
                      onChange={(e) => {
                        const newCollaborators = [...collaborators];
                        newCollaborators[index].name = e.target.value;
                        setCollaborators(newCollaborators);
                      }}
                    />
                  </div>
                  <button
                    className="text-sm border rounded-full p-3"
                    onClick={() => handleRemoveCollaborator(index)}
                    disabled={index === 0} // Disable button for first collaborator
                  >
                    Remove
                  </button>
                  <div>
                    <select
                      className="text-white py-2 px-2 rounded-xl items-center bg-[#2F2F2F] border border-[#434141]"
                      value={collaborator.percentage}
                      onChange={(e) => {
                        const newCollaborators = [...collaborators];
                        newCollaborators[index].percentage = e.target.value;
                        setCollaborators(newCollaborators);
                      }}
                    >
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="100">100%</option>
                    </select>
                  </div>
                </div>
              ))}
              <div className="space-x-3">
                <button
                  className="text-sm border rounded-full p-3"
                  onClick={handleAddCollaborator}
                >
                  + Add Collaborator
                </button>
                <button
                  onClick={() => toggleShowModal((prev) => !prev)}
                  className="text-sm border rounded-full p-3"
                >
                  Tokenize
                </button>
              </div>
            </div>
            <div className="flex mb-10 gap-3 mt-3">
              <div onClick={() => handleCreateCollaboration()}>
                <CustomButton labelText={"Finish"} variant="primary" />
              </div>
              <button className="text-sm border rounded-full p-4">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </DashboardWrapper>
      {showModal && (
        <CenterModal
          title="Create a Token"
          handleClose={() => toggleShowModal((prev) => !prev)}
        >
          <div>
            <form action="" className="space-y-4">
              <div className="grid gap-5 grid-cols-2">
                <div>
                  <div
                    className="text-sm mb-2 text-white font-semibold"
                    htmlFor=""
                  >
                    Select BlockChain
                  </div>
                  <select className="text-white py-2 px-2 rounded-xl items-center bg-[#2F2F2F] border border-[#434141]">
                    <option value="ETH">Ethereum (ETH)</option>
                  </select>
                </div>
                <div>
                  <div
                    className="text-sm mb-2 text-white font-semibold"
                    htmlFor=""
                  >
                    Token Type
                  </div>
                  <select className="text-white py-2 px-2 rounded-xl items-center bg-[#2F2F2F] border border-[#434141]">
                    <option value="TRC">TRC</option>
                  </select>
                </div>
              </div>
              <div>
                <TextInput label="Create Token Name" placeHolder="Token Name" />
              </div>
              <div>
                <TextInput label="Units Cost" placeHolder="e.g 0.0001ETH" />
              </div>
              <div>
                <TextInput label="Units Obtainable" placeHolder="e.g 2500" />
              </div>
              <div className="flex justify-between pt-5 gap-5">
                <div>
                  <CustomButton labelText={"Create Token"} variant="primary" />
                </div>
                <div>
                  <button className="text-sm border rounded-full py-4 text-white px-10">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default SplitRoyalties;
