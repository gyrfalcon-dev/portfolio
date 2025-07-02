import Image from "next/image";

export default function Home() {
  return (
    <div
      className="grid-pattern"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        margin: "0px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="scanline"></div>
      <p>Hyperion</p>
    </div>
  );
}
