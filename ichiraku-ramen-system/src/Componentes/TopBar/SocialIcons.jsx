import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import SocialIcon from "./Subcomponentes/Socialicon";

export default function SocialInfo() {

  const ICONS = [
    { ICON: Twitter, nameSocial: "twitter" },
    { ICON: Facebook, nameSocial: "facebook" },
    { ICON: Instagram, nameSocial: "instagram" },
    { ICON: Github, nameSocial: "github" }
  ];

    return (
      <div className="ContainSocial">
        {ICONS.map(({ ICON, nameSocial }) => (
        <SocialIcon key={nameSocial} nameSocial={nameSocial} ICON={ICON} />
      ))}
      </div>
    );
  }