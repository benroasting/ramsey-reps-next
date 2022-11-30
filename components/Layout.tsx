import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Layout({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Ramsey Reps" : "Ramsey Reps"}</title>
        <meta name="description" content="Ramsey Reps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header>
          <nav className="flex h-20 justify-between items-center px-4">
            <Link className="text-lg font-bold" href="/">
              <Image
                className="mt-7"
                src="/ramsey-reps-2.png"
                width={150}
                height={150}
                alt=""
              />
            </Link>
            <div>
              <Link className="p-5" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto px-4">{children}</main>
      </div>
    </>
  );
}
