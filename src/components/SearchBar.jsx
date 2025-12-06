import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function SearchBar({
  onSearch,
  onSort,
  placeholder = "Buscar...",
  showSort = true,
}) {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleSort = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    onSort?.(newOrder);
  };

  return (
    <div className="w-full max-w-2xl flex items-center gap-3 bg-white backdrop-blur-sm shadow-sm px-4 py-2 mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleSearch}
        className="grow bg-transparent outline-none text-gray-800 placeholder-gray-500 px-2"
      />
      {showSort && (
        <button
          onClick={handleSort}
          className="cursor-pointer flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {order === "asc" ? "A-Z" : "Z-A"}
        </button>
      )}
    </div>
  );
}
