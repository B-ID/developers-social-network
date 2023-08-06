import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import AuthProviders from "../auth-providers";
import { getCurrentUser } from "@/lib/session";

type Props = {};

const Header: FC<Props> = async (props) => {
  const session = await getCurrentUser();
  console.log(session)

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 gap-10 flexStart">
        <Link href="/">
          <Image src="./logo.svg" width={115} height={43} alt="dev-social" />
        </Link>
        <ul className="hidden xl:flex text-small gap-7">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="gap-4 flexCenter">
        {session?.user ? (
          <>
            user Photo
            <Link href="/create-project">share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Header;
