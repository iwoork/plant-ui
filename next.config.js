const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  let authconfig = {};
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    authconfig = {
      IDP_DOMAIN: "swapplant-dev.auth.us-east-1.amazoncognito.com",
      USER_POOL_ID: "us-east-1_jQagIcXFb",
      USER_POOL_CLIENT_ID: "7ndki6k77e1nop4s6b53rpji4m",
      REDIRECT_SIGN_IN: "http://localhost:3000/token",
      REDIRECT_SIGN_OUT: "http://localhost:3000/",
      AUTH_COOKIE_DOMAIN: "localhost",
    }
  } else {
    authconfig = {
      IDP_DOMAIN: "swapplant.auth.us-east-1.amazoncognito.com",
      USER_POOL_ID: "us-east-1_KEN9Jr3kx",
      USER_POOL_CLIENT_ID: "4osmplgtcpsg2i55ggcd7jn2ur",
      REDIRECT_SIGN_IN: "https://stoic-archimedes-0c3dfb.netlify.app/token",
      REDIRECT_SIGN_OUT: "https://stoic-archimedes-0c3dfb.netlify.app/",
      AUTH_COOKIE_DOMAIN: "stoic-archimedes-0c3dfb.netlify.app",
    }
  }
  
  return {
    target: "serverless",
    env: {
      ...authconfig,
    }
  }
}