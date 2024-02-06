// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken")

const CONNECT_SECRET = "dDMJiGAtLfyomp6YdtbGiNm4+siHm3lOyHPE1IJi7wo=";

const payload = {
    sub: "036368d8-e1e3-448e-93fe-ed43b42ce045",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 500,
    attributes: {
        name: "Jane",
        memberID: "123456789",
        email: "Jane@example.com",
        isPremiumUser: true, // boolean value
        age: 45,
    },
};

const header = { typ: "JWT", alg: "HS256" };

const encodedToken = jwt.sign(payload, CONNECT_SECRET, { algorithm: "HS256", header });

console.log(encodedToken);