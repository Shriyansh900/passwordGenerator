import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { LC, NUM, SC, UC } from "./Data/PassChar";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  let [Uppercase, setUpperCase] = useState(false);
  let [Lowercase, setLowerCase] = useState(false);
  let [Number, setNumber] = useState(false);
  let [Symbol, setSymbol] = useState(false);
  let [PasswordLength, setPasswordLength] = useState(10);
  let [fPass, setPass] = useState("");

  let createPassword = () => {
    toast.success("Password Generated...👍")
    let finalPass = "";
    let charSet = "";
    if (Uppercase || Lowercase || Number || Symbol) {
      if (Uppercase) charSet += UC;
      if (Lowercase) charSet += LC;
      if (Number) charSet += NUM;
      if (Symbol) charSet += SC;
      for (let i = 0; i < PasswordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      toast.error("Please Select atleast One Checkbox...");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);

    if (fPass != "") {
      toast.success("Password Copied...👍");
    } else {
      toast.error("Generate Password First...");
    }
  };

  return (
    <div className="bg-neutral-900 flex flex-col items-center justify-center h-screen ">
      <ToastContainer theme="dark" />
      <div className=" bg-gray-200 flex flex-col align-middle h-auto items-center justify-center  p-5 rounded-md ">
        <h1 className="text-xl font-bold pb-3">Password Generator</h1>
        <div className="flex flex-row items-center justify-center shadow-neutral-600 shadow-md bg-neutral-500 rounded-md">
          <input
            type="text"
            readOnly
            value={fPass}
            className="bg-white rounded-l-md py-1 px-2 "
          />
          <button
            onClick={copyPass}
            className="p-2 rounded-r-md bg-green-400 cursor-pointer hover:bg-green-300 active:bg-emerald-500 "
          >
            <FaCopy />
          </button>
        </div>

        <div className="flex flex-row items-center justify-between w-full mt-3 px-2 text-sm font-medium">
          <label>Password Length</label>
          <input
            type="number"
            min={10}
            max={20}
            onKeyDown={(event) =>
              event.key.length === 1 && event.preventDefault()
            }
            value={PasswordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className=" w-12 border py-1 px-0.5   bg-white shadow shadow-neutral-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-2 px-2 text-sm font-medium">
          <label>Add Uppercase Letters</label>
          <input
            type="checkbox"
            max={20}
            checked={Uppercase}
            onChange={() => setUpperCase(!Uppercase)}
            className="bg-neutral-500 cursor-pointer  rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-2 px-2 text-sm font-medium">
          <label>Add Lowercase Letters</label>
          <input
            type="checkbox"
            max={20}
            checked={Lowercase}
            onChange={() => setLowerCase(!Lowercase)}
            className="bg-neutral-500 cursor-pointer rounded-md "
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-2 px-2 text-sm font-medium">
          <label>Add Numbers</label>
          <input
            type="checkbox"
            max={20}
            checked={Number}
            onChange={() => setNumber(!Number)}
            className="bg-neutral-500 cursor-pointer rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full mt-2 px-2 text-sm font-medium">
          <label>Add Symbols</label>
          <input
            type="checkbox"
            max={20}
            checked={Symbol}
            onChange={() => setSymbol(!Symbol)}
            className="bg-neutral-500 cursor-pointer rounded-md "
          />
        </div>
        <button
          onClick={createPassword}
          className="bg-green-500 cursor-pointer text-center shadow-neutral-500 shadow-md  w-full p-1.5 rounded-md mt-3 hover:bg-green-400 active:shadow-none active:bg-emerald-500"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default App;
