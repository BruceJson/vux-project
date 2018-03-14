console.log('######');
console.log(process.env);

// domain处理
let cookieDomain = process.env.ROUTERSOFT_COOKIE_DOMAIN === "undefined" ? 'localhost' : process.env.ROUTERSOFT_COOKIE_DOMAIN;

let cookieDomainExp = new RegExp(cookieDomain);

if (!cookieDomainExp.test(window.document.domain)) {
  cookieDomain = document.domain;
}

const config = {
  'API_DOMAIN': process.env.ROUTERSOFT_API_DOMAIN === "undefined" ? 'http://mcp.api.test.routeryuncs.com' : process.env.ROUTERSOFT_API_DOMAIN,
  'COOKIE_DOMAIN': cookieDomain,
  'BUILD_CODE': process.env.ROUTERSOFT_BUILDCODE === "undefined" ? '' : process.env.ROUTERSOFT_BUILDCODE
};

console.log('configconfigconfigconfigconfigconfig');
console.log(config);

export default config;
