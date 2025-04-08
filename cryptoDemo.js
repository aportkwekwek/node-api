import crypto from "crypto";

// const hash = crypto.createHash("sha256");
// hash.update("Password123.");

// const hashedPassword = hash.digest("hex");

// //Check if the password is correct
// const password = "Password123.";

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Password123.!", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log("Decrypted:", decrypted);
