const workbox = require("./.config/workbox");
const manifest = require("./.config/manifest");
const withOffline = require("next-offline");
const withManifest = require("next-manifest");

const config = { target: "serverless", manifest, ...workbox };

module.exports = withOffline(withManifest(config));
