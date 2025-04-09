import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="ContainSearch">
      <Search className="SearchIcon" />
      <input type="text" className="SearchInput" placeholder="Buscar Comida, Restaurante...."></input>
    </div>
  );
}
