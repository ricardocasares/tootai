module.exports = {
  output: "./public/",
  name: "Tootai",
  short_name: "Tootai",
  start_url: "/?utm_source=pwa",
  display: "standalone",
  theme_color: "#4c6ef5",
  background_color: "#ffffff",
  icons: [
    {
      src: "/icons/512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src: "/icons/192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/icons/32x32.png",
      sizes: "32x32",
      type: "image/png"
    },
    {
      src: "/icons/16x16.png",
      sizes: "16x16",
      type: "image/png"
    }
  ]
};
