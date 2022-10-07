import { useState, useEffect } from "react";
import MetaMask from "./metamask";
import Near from "./near";

export default function Home() {
  const [connected, setConnected] = useState(false);

  const download = async () => {
    window.location.href =
      "https://nftstorage.link/ipfs/bafybeigcgv43aov2rrgyd2zsxutncjev6u6s3hu7mmsovwsbj6xt5irqp4";
  };

  return (
    <div>
      <MetaMask setConnected={setConnected} />
      <Near setConnected={setConnected} />
      {connected ? (
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={download}
            className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
          >
            Download
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
