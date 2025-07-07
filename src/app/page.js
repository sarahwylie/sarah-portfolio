// 'use client'
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const dynamicComponents = {
//   ReactFloatingBalloons: dynamic(
//     () =>
//       import("react-floating-balloons").then(
//         (mod) => mod.ReactFloatingBalloons
//       ),
//     { ssr: false }
//   )
// };

export default function Home() {
  // const [supportsTouch, setSupportsTouch] = useState(false);
  // useEffect(() => {
  //   setSupportsTouch("ontouchstart" in window || navigator.msMaxTouchPoints);
  // }, []);
  // const RFB = dynamicComponents.ReactFloatingBalloons;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
          Sarah Wylie
        </h1>

    {/* {supportsTouch ? (
        <h2>Click the balloons to pop 💥</h2>
      ) : (
        <h2>Double Click the balloons to pop 💥</h2>
      )}
      <RFB /> */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
Hello?
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
        </a> */}
      </footer>
    </div>
  );
}
