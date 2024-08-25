import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="space-y-10 pt-5">
        <section className="container min-h-[300px] bg-red-100">
          プロフィールセクション
        </section>
        <section className="container min-h-[300px] bg-yellow-100">
          言語セクション
        </section>
        <section className="container min-h-[300px] bg-blue-100">
          作品セクション
        </section>
        <footer className="min-h-44">
          <h2 className="text-center text-3xl">Contact Me</h2>
          <span>Build by </span>
          <Link href={"/"} className="underline underline-offset-4">
            ゆうと
          </Link>
          <span> . Hosting by </span>
          <Link
            href={"https://vercel.com/"}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </footer>
      </main>
    </>
  );
}
