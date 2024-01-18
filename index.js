/*
YOU ARE A BASTARD MAN FOR READING THIS CODE
*/
const express = require("express");

const app = express();
const PORT = 3000;
const WUBBY = "https://twitch.tv/paymoneywubby";

app.get("/", (_, res) => {
  res.redirect(301, WUBBY);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
