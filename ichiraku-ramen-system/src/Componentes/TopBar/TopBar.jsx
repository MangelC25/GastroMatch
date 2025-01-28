import ContactInfo from "./ContactInfo";
import SocialInfo from "./SocialIcons";

export function TopBar() {
  return (
    <div className="ContainTopBar">
      <ContactInfo />
      <SocialInfo />
    </div>
  );
}
