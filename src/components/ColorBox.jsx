import "./ColorBox.style.css";

const defaultColorCode = "0";

export default function ColorBox({ backgroundColor, onClick, id }) {
  return (
    <div
      className="colorbox"
      onClick={() => onClick(id)}
      style={{
        backgroundColor: `rgb(
          ${backgroundColor?.r ?? defaultColorCode},
          ${backgroundColor?.g ?? defaultColorCode},
          ${backgroundColor?.b ?? defaultColorCode}
        )`,
      }}
    ></div>
  );
}
