const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary").v2;
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "mariounity",
  api_key: process.env.CLOUDINARY_API_KEY || "386944521795436",
  api_secret: process.env.CLOUDINARY_API_SECRET || "v6aUW4isKi6rgmes_QlmhAmbCXg",
});



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
