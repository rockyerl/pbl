import type { NextConfig } from "next";

// Logo & foto sementara diambil dari situs lama. Pindahkan ke /public lalu hapus remotePatterns.
const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.pbl.co.id" },
      { protocol: "https", hostname: "pbl.co.id" },
    ],
  },
};
export default config;
