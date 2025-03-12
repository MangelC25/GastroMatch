export default function MenuItem({OptionText}) {
  return (
    <li className="option">
      <a href={`#${OptionText}`}>{OptionText}</a>
    </li>
  );
}
