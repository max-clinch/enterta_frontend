import React, { useState } from "react";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import { userLogin, userRegister } from "../../../../../utils/apiURLs/requests";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { entertaABI, entertaContract } from "../../../../../constant/constants";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const makeRequest = useApiRequest();
  const navigate = useNavigate();

  const handleLogin = async (datapayload) => {
    setLoading(true);
    const payload = { ...datapayload };

    try {
      const response = await makeRequest.post(userLogin, payload);
      console.log(response?.data?.token);
      setLoading(false);
      if (response?.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("firstName", response?.data?.firstName);
        localStorage.setItem("stageName", response?.data?.stageName);
        localStorage.setItem("lastName", response?.data?.lastName);
        localStorage.setItem("email", response?.data?.email);
        localStorage.setItem("password", datapayload?.password);
        navigate("/dashboard/overview");
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return { handleLogin, loading };
};

export default useLogin;
