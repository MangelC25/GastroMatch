import { Phone, Mail } from "lucide-react";
import ContactIcon from "./Subcomponentes/Contacticon";

export default function ContactInfo() {

  const ICONS = [
    { ICON: Phone, factContact: "(+57) 320 605 8784" },
    { ICON: Mail, factContact: "miguelcastpinz@hotmail.com" }
  ];

  return (
    <div className="ContainContact">
        {ICONS.map(({ ICON, factContact }) => (
        <ContactIcon key={factContact} factContact={factContact} ICON={ICON} />
      ))}
    </div>
  );
}
