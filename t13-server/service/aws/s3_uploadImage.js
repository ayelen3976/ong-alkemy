const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const config = require("../../config/aws");

AWS.config.update(config.awsConfig);

const s3 = new AWS.S3();

const uploadImage = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ ok: false, message: "Image not provided" });
  }

  const fileName = file.originalname.split(".");
  const fileType = fileName[fileName.length - 1];

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: file.buffer,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      return res.status(500).json({ ok: false, message: error });
    }
    res.status(200).json({ ok: true, data: data.Location });
  });
};

module.exports = uploadImage;
