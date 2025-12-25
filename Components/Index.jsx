"use client";

import React, { useState } from "react";
import Image from "next/image";

function Index() {
  const [openGift, setOpenGift] = useState(false);

  return (
    <div
      className="relative flex min-h-screen bg-red-900 flex-col
      items-center
      justify-center
      text-white
      overflow-hidden
      px-4
      font-t-montserrat)]
    "
    >
      {/* ❄️ NEVE */}
      <div className="snow pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="snowflake text-sm sm:text-base md:text-lg">
            ❄
          </span>
        ))}
      </div>

      {/* TEXTO */}
      <h1
        className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        mb-3
        text-center
        z-10
      "
      >
        🎄 Feliz Natal 🎄
      </h1>

      <p
        className="
        text-lg
        sm:text-xl
        md:text-2xl
        mb-8
        z-10
        text-center
      "
      >
        Manu Confecções
      </p>

      {/* 🎁 PRESENTE */}
      {!openGift && (
        <div
          onClick={() => setOpenGift(true)}
          className="
            cursor-pointer
            z-10
            animate-bounce
            hover:scale-110
            transition-transform
            flex
            flex-col
            items-center
          "
        >
          <span
            className="
            text-6xl
            sm:text-7xl
            md:text-8xl
          "
          >
            🎁
          </span>

          <p
            className="
            text-sm
            sm:text-base
            mt-2
            font-semibold
          "
          >
            Clique no presente
          </p>
        </div>
      )}

      {/* 🖼️ IMAGEM AO ABRIR */}
      {openGift && (
        <div
          className="
          z-30
          bg-white
          p-4
          sm:p-6
          rounded-2xl
          shadow-2xl
          animate-fade-in
          flex
          flex-col
          items-center
          justify-center
          w-full
          max-w-xs
          sm:max-w-sm
          md:max-w-md
        "
        >
          <Image
            src="/foto.jpeg"
            alt="Presente de Natal"
            width={300}
            height={300}
            className="
              rounded-xl
              w-full
              h-auto
              max-w-[260px]
              sm:max-w-[300px]
            "
          />

          <p
            className="
            text-center
            text-red-700
            font-bold
            mt-3
            text-sm
            sm:text-base
          "
          >
            🎅 Feliz Natal, que o ano que vira seja repleto de coisas boas! 🎄
          </p>
        </div>
      )}
    </div>
  );
}

export default Index;
