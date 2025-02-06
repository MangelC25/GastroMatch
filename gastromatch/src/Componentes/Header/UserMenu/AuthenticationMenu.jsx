import ButtonUserMenu from "./Subcomponentes/ButtonUserMenu";

export default function AuthenticationMenu() {
  const options = [
    { OptionUserMenu: "Iniciar Sesion" },
    { OptionUserMenu: "Registrarse" },
  ];

  return (
    <div id="ContainUserMenu">
      {options.map(({ OptionUserMenu }) => (
        <ButtonUserMenu key={OptionUserMenu} OptionUserMenu={OptionUserMenu} />
      ))}
    </div>
  );
}
