# Nuxt Server Plugin Issues

## API endpoint

Visiting the API endpoint:
- https://nuxt-plugin-visit-counter-issue.nuxt-test.workers.dev/api/visit
- http://localhost:3000/api/visit

Make the counter increased only once due to `server: false` for `useFetch` and `ssr: false` in `nuxt.config.ts`.

![image](https://github.com/user-attachments/assets/16f499cc-5018-49dc-8b79-19fbd4c44481)
![image](https://github.com/user-attachments/assets/10e75945-8684-4e44-b19e-111aeeb4e9ff)

## Home page

But on the home page it's increased twice for unknown reason:
- https://nuxt-plugin-visit-counter-issue.nuxt-test.workers.dev
- http://localhost:3000

![image](https://github.com/user-attachments/assets/55582b77-28d1-47d8-a2c4-732e61f37f3f)
![image](https://github.com/user-attachments/assets/e25b9417-36f6-4d5d-88d1-12b87dd1222e)

