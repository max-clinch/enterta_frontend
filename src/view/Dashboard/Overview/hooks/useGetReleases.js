import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendRelease } from "../../../../utils/apiURLs/requests";
import useApiRequest from "../../../../utils/hooks/useApiRequest";

const useGetReleases = () => {
  const [loading, setLoading] = useState(false);
  const [releases, setRelease] = useState("");
  const makeRequest = useApiRequest();
  const navigate = useNavigate();

  const handleReleases = async () => {
    setLoading(true);
    try {
      const response = await makeRequest.get(sendRelease);
      console.log(response?.data);
      setRelease(response?.data);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return { handleReleases, loading, releases };
};

export default useGetReleases;
