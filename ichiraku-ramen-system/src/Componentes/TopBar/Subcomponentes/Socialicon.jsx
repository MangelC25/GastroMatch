export default function SocialIcon({ nameSocial, ICON }) {
    return (
      <a
        href={`https://${nameSocial}.com`}
        target="_blank"
        rel="noopener noreferrer"
        className="LinkSocial"
      >
        <ICON/>
      </a>
    );
  }