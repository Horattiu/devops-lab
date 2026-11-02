const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "devops-lab-api",
    time: new Date().toISOString(),
  });
});

app.get("/", (_req, res) => {
  res.type("text").send("devops-lab-api — try GET /health");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`devops-lab-api listening on :${PORT}`);
  });
}

module.exports = app;
