"use client";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export default function CFavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);
    if (input !== "") setGameName(input);
    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full px-2 h-8 text-black rounded-md"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="self-start hover:scale-110 duration-200 transition-all"
            onClick={() => handleButton()}
          >
            <FiX size={24} color="#FFF" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all"
          onClick={() => handleButton()}
        >
          <FiEdit size={24} color="#FFF" />
        </button>
      )}
      {gameName ? (
        <div>
          <span className="text-white">Jogo Favorito: </span>
          <span className="font-bold text-white">{gameName}</span>
        </div>
      ) : (
        <span>Adicionar jogo</span>
      )}
    </div>
  );
}
