export default defineNuxtConfig({
  compatibilityDate: '2026-04-21',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'Bibi Aremieye | TypeScript Full-Stack Engineer',
      meta: [
        {
          name: 'description',
          content:
            'TypeScript full-stack engineer in Hamburg — React, Next.js, Node, NestJS, Java/Spring, PostgreSQL, Kubernetes, and cloud-native delivery.'
        }
      ]
    }
  }
})
