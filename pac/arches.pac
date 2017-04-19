function FindProxyForURL(url, host)
{
  if (isInNet(host, "172.16.0.1", "255.255.255.0")) {
    return "SOCKS localhost:8080";
  } else {
    return "DIRECT";
  }
}
