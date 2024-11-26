import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={80}
      width={80}
      alt="logo"
      src="/logo.svg"
    />
  )
}