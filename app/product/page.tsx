"use client";

import { useState } from "react";

export default function ProductPage() {
  const [rotate, setRotate] = useState({ x: 10, y: 0 });
  const [dragging, setDragging] = useState(false);

  function move(e: any) {
    if (!dragging) return;

    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;

    setRotate({
      x: (y / window.innerHeight - 0.5) * -50,
      y: (x / window.innerWidth - 0.5) * 90,
    });
  }

  return (
    <main
      onMouseMove={move}
      onMouseUp={() => setDragging(false)}
      onTouchMove={move}
      onTouchEnd={() => setDragging(false)}
      className="min-h-screen bg-black text-white p-10"
    >
      <a href="/" className="text-purple-400">← رجوع للمتجر</a>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
          className="h-96 flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <div
            className="relative w-64 h-64 transition-transform duration-100"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-44 h-32 border-[18px] border-purple-500 rounded-t-full border-b-0 shadow-[0_0_40px_#a855f7]" />
            <div className="absolute left-8 top-32 w-16 h-28 bg-purple-600 rounded-3xl shadow-[0_0_30px_#a855f7]" />
            <div className="absolute right-8 top-32 w-16 h-28 bg-purple-600 rounded-3xl shadow-[0_0_30px_#a855f7]" />
            <div className="absolute left-14 top-40 w-8 h-14 bg-black rounded-xl" />
            <div className="absolute right-14 top-40 w-8 h-14 bg-black rounded-xl" />
          </div>
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-4">Bluetooth Headphones</h1>
          <p className="text-gray-400 mb-6">
            اسحب على المجسم حتى تتحكم فيه.
          </p>

          <h2 className="text-4xl text-purple-400 mb-6">$49</h2>

          <button className="bg-purple-600 px-8 py-4 rounded-xl">
            إضافة إلى السلة 🛒
          </button>
        </div>
      </section>
    </main>
  );
}