var b2wApiUrlBase = "https://server.com:7071/api/"
if (window.location.hostname !== "localhost" && window.location.protocol !== "file:") {
  b2wApiUrlBase = "#{AzureURL}#";
}
