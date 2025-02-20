import Logo from "@/components/svgs/Logo";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="flex flex-row w-screen h-screen  mx-auto">
        <Logo escala={2} className="absolute top-5 left-5" />
        <div className="max-w-[400px] min-w-[400px] mx-auto flex-1 flex flex-col">
          {children}
        </div>
        <div className="flex-1 h-screen w-screen lg:md:block hidden">
            <Image alt="" src={"/auth/bg-auth.jpg"}  width={1920} height={1080} className="object-cover h-full min-w-full " />

        </div>

    </div>
  );
}
