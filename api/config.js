module.exports = {
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "admin",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || "contact_directory_dev",
    DB_PORT: process.env.DB_PORT || 5432,
    PORT: process.env.PORT || 3001,
  };