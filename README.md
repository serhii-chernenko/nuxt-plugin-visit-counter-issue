# Nuxt Server Plugin Issues

## Production mode

Visiting the home page:
https://serhii-chernenko-nuxt-plugin-visit-counter-issue.nuxt-test.workers.dev

Or API endpoint:
https://serhii-chernenko-nuxt-plugin-visit-counter-issue.nuxt-test.workers.dev/api/visit

Make the counter increased only once due to `server: false` for `useFetch` and `ssr: false` in `nuxt.config.ts`.

## Dev mode

But in the dev mode in increased twice on the home page for unknown reason:
http://localhost:3000/

While for API it works correctly by increasing only by 1:
http://localhost:3000/api/visit
