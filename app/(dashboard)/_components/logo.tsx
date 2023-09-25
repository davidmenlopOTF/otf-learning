"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");

  return (
    <>
      {isTeacherPage ? (
        <Image height={130} width={175} alt="logo" src="/OTF.png" />
      ) : (
        <Image height={130} width={175} alt="logo" src="/OTF-teachers.png" />
      )}
    </>
  );
};
