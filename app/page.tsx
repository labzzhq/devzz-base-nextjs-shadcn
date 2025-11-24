import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        alt="Toolzz Devzz Start Template Logo"
        src="/placeholder-toolzz-devzz-start-template-logo.svg"
        width={347}
        height={280}
        className="opacity-10 w-48"
      />
    </div>
  );
}
