import CryptoJS from "crypto-js";
import { UserType } from "@/types";
import { STORAGE_KEY } from "@/lib/constants";

const secretKey = import.meta.env.VITE_ENCRYPT_KEY;

export const fetchLocalUserData = (
  storeKey = STORAGE_KEY,
  initialState = {}
) => {
  try {
    const userData = localStorage.getItem(storeKey);
    if (userData) {
      const bytes = CryptoJS.AES.decrypt(userData, secretKey);
      const decryptedData = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
    return initialState;
  } catch {
    deleteLocalUserData(storeKey);
    return initialState;
  }
};

export const storeLocalUserData = (
  userData: UserType,
  storeKey = STORAGE_KEY
) => {
  const prevData = fetchLocalUserData(storeKey);
  const data = JSON.stringify({ ...prevData, ...userData });
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  try {
    localStorage.setItem(storeKey, ciphertext);
  } catch {
    throw new Error("Local storage permission is needed");
  }
};

export const deleteLocalUserData = (storeKey = STORAGE_KEY) => {
  try {
    localStorage.removeItem(storeKey);
  } catch {
    throw new Error("Local storage permission is needed");
  }
};
