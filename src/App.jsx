import React, { useState } from "react";
// import { Copy, Key } from "lucide-react";
import { LC, NUM, SC, UC } from "./Data/PassChar";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineCopyAll, MdOutlineKey } from "react-icons/md";

const App = () => {
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState("");

  const createPassword = () => {
    let finalPass = "";
    let charSet = "";
    
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NUM;
      if (symbols) charSet += SC;
      
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPassword(finalPass);
      toast.success("Password generated successfully! 🔐");
    } else {
      toast.error("Please select at least one option");
    }
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard! 📋");
    } else {
      toast.error("Generate a password first");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[bounce_7s_infinite]"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[bounce_7s_infinite_2s]"></div>
        
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <MdOutlineKey  className="w-8 h-8 text-blue-300" />
            <h1 className="text-2xl font-bold text-white">Password Generator</h1>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg mb-6 flex overflow-hidden">
            <input
              type="text"
              readOnly
              value={password}
              className="w-full bg-transparent py-3 px-4 text-white focus:outline-none placeholder-white/50"
              placeholder="Your password will appear here"
            />
            <button
              onClick={copyPassword}
              className="px-4 text-blue-300 hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              <MdOutlineCopyAll className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-white/80">Password Length</label>
              <input
                type="number"
                min={8}
                max={20}
                value={passwordLength}
                onChange={(e) => setPasswordLength(Number(e.target.value))}
                className="w-16 bg-white/5 border border-white/10 rounded px-2 py-1 text-white text-center"
              />
            </div>
            <input
              type="range"
              min={8}
              max={20}
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
            />
          </div>

          <div className="space-y-3 mb-8">
            <label className="flex items-center justify-between text-white/80 cursor-pointer">
              <span>Include Uppercase</span>
              <input
                type="checkbox"
                checked={uppercase}
                onChange={() => setUpperCase(!uppercase)}
                className="w-5 h-5 rounded border-white/20 bg-white/5 appearance-none cursor-pointer checked:bg-blue-400 checked:border-blue-400 relative checked:after:content-['✓'] checked:after:font-bold checked:after:text-xs checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white"
              />
            </label>
            <label className="flex items-center justify-between text-white/80 cursor-pointer">
              <span>Include Lowercase</span>
              <input
                type="checkbox"
                checked={lowercase}
                onChange={() => setLowerCase(!lowercase)}
                className="w-5 h-5 rounded border-white/20 bg-white/5 appearance-none cursor-pointer checked:bg-blue-400 checked:border-blue-400 relative checked:after:content-['✓'] checked:after:font-bold checked:after:text-xs checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white"
              />
            </label>
            <label className="flex items-center justify-between text-white/80 cursor-pointer">
              <span>Include Numbers</span>
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers(!numbers)}
                className="w-5 h-5 rounded border-white/20 bg-white/5 appearance-none cursor-pointer checked:bg-blue-400 checked:border-blue-400 relative checked:after:content-['✓'] checked:after:font-bold checked:after:text-xs checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white"
              />
            </label>
            <label className="flex items-center justify-between text-white/80 cursor-pointer">
              <span>Include Symbols</span>
              <input
                type="checkbox"
                checked={symbols}
                onChange={() => setSymbols(!symbols)}
                className="w-5 h-5 rounded border-white/20 bg-white/5 appearance-none cursor-pointer checked:bg-blue-400 checked:border-blue-400 relative checked:after:content-['✓'] checked:after:font-bold checked:after:text-xs checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:text-white"
              />
            </label>
          </div>

          <button
            onClick={createPassword}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Generate Password
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
      />
    </div>
  );
};

export default App;