import React from "react";

function Background() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <nav>
          <p className="w-full absolute top-[5%]  py-10 flex justify-center  text-2xl text-zinc-600 font-semibold">
            Documents
          </p>
        </nav>
        <h1 className="font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[20vw] leading-none tracking-tighter text-zinc-900">
          ARSALAN
        </h1>
      </div>
    </>
  );
}

export default Background;
