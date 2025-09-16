import React from "react";
import { User, ChevronLeft } from "lucide-react";

export default function Header({ onProfileClick }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <button>
        <ChevronLeft />
      </button>
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <button onClick={onProfileClick}>
        <User className="w-6 h-6 text-gray-800" />
      </button>
    </header>
  );
}