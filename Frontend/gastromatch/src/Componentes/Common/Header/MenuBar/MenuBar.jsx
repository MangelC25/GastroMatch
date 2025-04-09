import MenuItem from "./SubComponentes/MenuItem";

export default function MenuBar() {
  const options = [
    { Text: "Inicio" },
    { Text: "Restaurantes" },
    { Text: "Menus" },
    { Text: "Promociones" },
  ];

  return (
    <div id="Menubar">
      <nav id="navbar">
        <div id="nav-container">
          <ul id="navbar-nav">
            {options.map(({ Text }) => (
              <MenuItem key={Text} OptionText={Text} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
