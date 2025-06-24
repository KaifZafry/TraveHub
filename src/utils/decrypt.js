import CryptoJS from 'crypto-js';

// Base64-decoded key & IV (same as .NET byte[] values)
const key = CryptoJS.enc.Base64.parse("lm9eKyE4P/FzwLCYPVwKzKMO6uqcfSC4zhLmIBRTObs=");
const iv = CryptoJS.enc.Base64.parse("CQBp1rmC/LTEVs42fIBuxA==");

// Equivalent of .NET Decryptpass
export function decryptAES(password) {
  try {
    const decrypted = CryptoJS.AES.decrypt(password, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8); // Returns plaintext
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
}
