import { REACT_APP_SECRET_KEY } from "../config/App.config";
import CryptoJS from "crypto-js";

export const EncryptData = (data: any): any => {
    try {
        const encryptData: string = CryptoJS.AES.encrypt(JSON.stringify(data), REACT_APP_SECRET_KEY).toString();
        return encryptData;
    } catch (error) {
        console.log({ error });
        return null;
    }
};

export const DecryptData = (data: string): any => {
    try {
        const deccryptData = JSON.parse((CryptoJS.AES.decrypt(data, REACT_APP_SECRET_KEY)).toString(CryptoJS.enc.Utf8));
        return deccryptData;
    } catch (error) {
        console.log({ error });
        return null;
    }
};