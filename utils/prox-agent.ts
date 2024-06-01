
const setProxyAgent = (proxy: string, port: string) => {
  const { ProxyAgent, setGlobalDispatcher } = require("undici");
  const proxyAgent = new ProxyAgent(`http://${proxy}:${port}`);
  setGlobalDispatcher(proxyAgent);
}

export { setProxyAgent }
