module.exports={
secret: process.env.SECRET_KEY|| "secret",
expires: process.env.AUTH_EXPIRES || "24h",
rounds:process.env.AUTH_ROUND || 10
}