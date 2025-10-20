"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <div className="flex justify-center mb-4">
            <Image
              src="/logom.png"
              alt="CELOAİRBNB Logo"
              width={290} // istediğin boyuta göre değiştir
              height={290}
              className="rounded-full"
            />
          </div>

          {/* Celo Network Badge */}
          <div className="flex justify-center mt-2">
            <Image
              src="/celocelo.jpg"
              alt="Celo Network Logo"
              width={140} // istediğin boyuta göre ayarla
              height={40}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div>

          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">CELOAİRBNB APP</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Kiralık Odalar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Şehir Merkezi Stüdyo",
                  price: "0.5 CELO / gece",
                  description: "Konforlu stüdyo, ücretsiz wifi, 2 kişi kapasiteli.",
                  img: "/room1.jpg",
                },
                {
                  id: 2,
                  title: "Deniz Manzaralı Oda",
                  price: "0.8 CELO / gece",
                  description: "Geniş balkon, deniz manzarası, kahvaltı dahil.",
                  img: "/room2.jpg",
                },
                {
                  id: 3,
                  title: "Ekonomik Tek Kişilik",
                  price: "0.2 CELO / gece",
                  description: "Temiz ve uygun fiyatlı tek kişilik oda.",
                  img: "/room3.jpg",
                },
              ].map(room => (
                <div key={room.id} className="bg-base-100 rounded-2xl shadow-md overflow-hidden">
                  <div className="h-40 w-full relative bg-gray-200">
                    {/* Use next/image if images exist; fallback to colored block */}
                    <Image
                      src={room.img}
                      alt={room.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{room.title}</h3>
                    <p className="text-sm text-muted mt-1">{room.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold">{room.price}</span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          // minimal placeholder action — later integrate smart contract flow
                          alert(`Odayı kirala: ${room.title}`);
                        }}
                      >
                        Odayı Kirala
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
