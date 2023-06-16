import Image from "next/image";

const Logo = () => (
  <div
    style={{
      position: "relative",
      height: "15px",
      width: "80px",
    }}
  >
    <Image
      src="/logo.svg"
      alt="Climatic Logo"
      fill
      style={{
        objectPosition: "left",
        objectFit: "contain",
      }}
    />
  </div>
);

export default Logo;
