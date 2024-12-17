"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function CInputSearchGames({
  placeholder,
}: {
  placeholder?: string;
}) {
  const router = useRouter();
  const [inputValue, setValue] = useState("");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue === "") return;
    router.push(`/game/search/${inputValue}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        className="w-11/12 bg-slate-200 outline-none"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
