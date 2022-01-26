const _ = { 
  clustername: "cluster1",
  db: {
    default: "mongo_test_user"
  },
  user: "lukhdkdgi09d67dt9",
  passwd: "ohA8uaiyh9yDUHD0dygis68sfdpog00idjvKHGDI897df6"
}

module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: `mongodb+srv://${_.user}:${_.passwd}@${_.clustername}.qerqa.mongodb.net/${_.db.default}?retryWrites=true&w=majority`,
    LANG: `en-US`,
    DEV_API_KEY: 'Sxh90-8s00Y-D98dy-9jdpd'
  }
}