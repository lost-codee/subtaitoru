import nextPwa from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = nextPwa({
  dest: "public",
});

export default {
  ...nextConfig,
  reactStrictMode: true,
};
