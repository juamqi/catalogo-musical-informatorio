import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function SearchBar({
  onSearch,
  placeholder = "Buscar...",
  showSort = true,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl rounded-full flex items-center gap-3 bg-white px-4 h-12 mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleSearch}
        className="grow bg-transparent outline-none text-gray-800 placeholder-gray-500 px-2"
      />
    </div>
  );
}