import logo from "../logo.png";

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      width={360}
      style={{ display: "block", margin: "28px auto" }}
    />
  );
}
