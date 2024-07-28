import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { server } from '../../server.js';

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          setMessage(res.data.message);
        } catch (error) {
          console.log("Error during activation:", error.response.data.message);
          setMessage(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {error ? (
        <p>{message || "Your token is expired!"}</p>
      ) : (
        <p>Your account has been created successfully!</p>
      )}
    </div>
  );
}

export default ActivationPage;
