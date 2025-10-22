'use client';

import axios from 'axios';
import swal from 'sweetalert';
import getData from '@/app/data/getAllDate';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAlert } from './AlertContext';

axios.defaults.withCredentials = true; // 👈 مهم عشان الكوكيز تتبعت تلقائي

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState(false);
  const { showAlert } = useAlert();

  // ------------------- AUTH ACTIONS -------------------


  const login = async (Email, Password) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/login`, {
        Email,
        Password,
      });

      setUser(res.data.user);
      localStorage.setItem('zscUser', JSON.stringify(res.data.user));
      localStorage.setItem('State', 'true');

      showAlert(res.data.message || 'Login successful');

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';

      if (err.response?.status === 401 && err.response?.data?.emailSent) {
        showAlert(message);
      } else {
        showAlert(message);
      }
    }
  };

  const Logout = () => {
    swal({
      title: "Are you sure you want to logout?",
      text: "You will be logged out from your account and need to login again to access your data.",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "swal-btn-cancel",
          closeModal: true,
        },
        confirm: {
          text: "Logout",
          value: true,
          visible: true,
          className: "swal-btn-confirm",
          closeModal: true,
        },
      },
      dangerMode: true,
      closeOnClickOutside: false,
      closeOnEsc: false,
    }).then(async(willLogout) => {
      if (willLogout) {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/logout`);
        } catch (err) {
          console.error('Logout error:', err);
        }
        setUser(null);
        setIsLogin(false);
        localStorage.removeItem("zscUser");
        localStorage.removeItem("State");
        window.location.href = "/Pages/Login";
      }
    });
  };


  const registerNewUser = async (Name, Email, Password) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/register`, { Name, Email, Password });
      showAlert(res.data.message);
      setTimeout(() => window.location.href = '/Pages/Login', 2000);
    } catch (err) {
      swal('Oops!', err.response?.data?.message || 'Registration failed', 'error');
    }
  };

  const updatePhoto = async (photo) => {
    const formData = new FormData();
    formData.append('image', photo);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      showAlert('Photo Updated Successfully');

      const updatedUser = {
        ...user,
        profilePhoto: res.data?.profilePhoto || res.data,
      };

      localStorage.setItem('ZscUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (err) {
      console.error(err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        'Failed to update profile photo. Please try again.';

      showAlert(message);
    }
  };

  const ResetPassword = async (id, token, password) => {
    if (!password) return showAlert('All fields are required');
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/password/reset-password/${id}/${token}`,
        { password }
      );
      showAlert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const ForgetEmail = async (email) => {
    if (!email) return showAlert('Email field is required');
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/password/reset`,
        { email }
      );
      showAlert(res.data.message || res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyAccount = async (id, token) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/${id}/verify/${token}`
      );
      setVerifyStatus(true);
      showAlert(res.data.message || 'Account Verified');
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------- INIT -------------------

  useEffect(() => {
    const storedUser = localStorage.getItem('zscUser');
    const loginState = localStorage.getItem('State');

    if (storedUser && loginState === 'true') {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }

    setIsAuthChecked(true);
  }, []);

  useEffect(() => {
    getData('auth', setUsers);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        Logout,
        registerNewUser,
        updatePhoto,
        ResetPassword,
        ForgetEmail,
        verifyAccount,
        verifyStatus,
        setVerifyStatus,
        isLogin,
        isAuthChecked,
        user,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
