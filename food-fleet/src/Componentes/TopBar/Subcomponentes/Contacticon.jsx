export default function ContactIcon({ factContact, ICON }) {
  return (
    <div className="ContactC">
      <ICON className="ContactIcon" />
      <span>{factContact}</span>
    </div>
  );
}
