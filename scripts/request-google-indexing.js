const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const scope = "https://www.googleapis.com/auth/indexing";
const REDIRECT_URL = "http://localhost:5173";
const googleAuthPath = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:5173&scope=https://www.googleapis.com/auth/indexing&response_type=code&access_type=offline`;

const GOOGLE_TOKEN_API = "https://accounts.google.com/o/oauth2/token";
const GOOGLE_URL_UPDATE_ENDPOINT =
    "https://indexing.googleapis.com/v3/urlNotifications:publish";

const code = "";

const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const getRefreshTokenData = `client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=http://localhost:5173&grant_type=authorization_code&code=${code}&access_type=offline`;
const getAccessTokenData = `client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&refresh_token=${GOOGLE_REFRESH_TOKEN}&grant_type=refresh_token`;

const sitemap = fs.readFileSync(
    path.resolve(__dirname, "../dist/sitemap.xml"),
    { encoding: "utf-8" },
);
const paths = sitemap
    .replace(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
        "",
    )
    .replace("</urlset>", "")
    .replace(/<url><loc>(.*?)<\/loc><\/url>/g, "$1")
    .split("\n")
    .filter((v) => !!v);

fetch(GOOGLE_TOKEN_API, {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getAccessTokenData,
})
    .then((response) => response.text())
    .then((data) => {
        const promises = paths.map((url) =>
            fetch(GOOGLE_URL_UPDATE_ENDPOINT, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${JSON.parse(data)["access_token"]}`,
                },
                body: {
                    url,
                    type: "URL_UPDATED",
                },
            }),
        );

        Promise.allSettled(promises)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    })

    .catch((error) => {
        console.error(error);
    });
