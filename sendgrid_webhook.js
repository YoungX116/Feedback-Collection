var localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "fmailxy" }, function(err, tunnel) {
  console.log("LT running");
});
