// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@sidebase/nuxt-auth'
  ],
  shadcn : {
    prefix: '',
    componentDir: '.components/ui'
  },
    routeRules: {
      '/api/**' : {
        proxy: { to : "https://localhost:7010/api/**"}
      }
    },
  auth: {
    isEnabled : true,
    globalAppMiddleware:false,
    baseURL: 'https://localhost:7010/api/',
    provider:{
      type:'local',
      endpoints: {
        signIn: { path: 'auth/Authenticate', method: 'post' },
        signOut: false,
        signUp: { path: 'user/create', method: 'post' },
        getSession: { path: 'session', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        maxAgeInSeconds: 1800,
        sameSiteAttribute: 'none',
        cookieDomain: '.',
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      refresh: {
        isEnabled: false, 
        // TODO : REFRESH ROUTE IN API
        // endpoint: { path: '/refresh', method: 'POST' },
        // refreshOnlyToken: true,
      },
      session: {
        dataType: {
          firstName: 'string',
          lastName: 'string',
        },
      }
    }
  }
  
  
})