import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="flex items-center justify-center w-full max-w-2xl m-auto bg-zinc-100/20 rounded-full"
        action="https://www.google.com/search"
        method="get"
      >
        <input
          type="text"
          className="w-full h-full pl-6 py-3 text-xl font-normal bg-transparent text-white border-none focus:outline-none placeholder:text-zinc-200"
          placeholder="Busque no Google"
          name="q"
          autoComplete="off"
        />
        <button aria-label="Pesquisar" type="submit">
          <FiSearch className="w-6 h-6 mr-5 text-zinc-200 hover:text-zinc-50" />
        </button>
      </form>
    </div>
  );
}
