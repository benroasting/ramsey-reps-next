import Head from "next/head";
import Link from "next/link";
import React from "react";

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
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 justify-between items-center px-4">
            <Link className="text-lg font-bold" href="/">
              Ramsey Reps
            </Link>
            <div>
              <Link className="p-5" href="/user-reps">
                Add Reps
              </Link>
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
