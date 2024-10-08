import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from "axios";
import { toast } from 'react-toastify'; // Make sure you have react-toastify installed
import { server } from '../server';

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          setMessage(res.data.message);
          toast.success("Your account has been created successfully!"); // Show success toast
          navigate("/login"); // Navigate after success
        } catch (error) {
          console.log("Error during activation:", error.response.data.message);
          setMessage(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token, navigate]);

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
        <p>{message || "please wait activating your account..."}</p>
      )}
    </div>
  );
}

export default ActivationPage;
