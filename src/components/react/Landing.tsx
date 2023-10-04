import React from "react";

export default function Landing() {
  return (
    <>
      <header className="flex container mx-auto min-h-24 items-center justify-between">
        <a className="text-4xl">L</a>
        <nav className="text-right flex items-center gap-6 tracking-widest">
          <a>Journey</a>
          <a className="text-3xl">&bull;</a>
        </nav>
      </header>
      <section className="grid grid-cols-2 container items-center">
        <div className="leading-none">
          <h1 className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-500">L eye</h1>
          <h4 className="tracking-[0.5rem] opacity-50">Leye Oluwaleimu</h4>
          <div className="text-2xl tracking-[0.7rem] font-bold">FULLSTACK DEV</div>
        </div>
        <div className="h-[calc(70vh)]">
          <img src="/LI_.png" alt="L eye" className="h-full " />
        </div>
      </section>
      <div className="bg-gradient-to-r from-rose-500 to-blue-500 h-1"></div>
      <section className="container flex justify-between h-[calc(20vh)] text-center items-center text-sm font-thin opacity-75 tracking-[0.75rem]">
        <div>FRONTEND</div>
        <div>BACKEND</div>
        <div>DEVOPS</div>
        <div>UI / UX</div>
      </section>
    </>
  );
}
