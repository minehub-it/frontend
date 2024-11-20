export const appConfig = {
  title: "Minecraft ITALIA",
  description: "",

  languages: {
    default: 'it',
    available: ['it']
  },

  theme: {
    active: 'classic',
  },

  endpoints: {
    dev: {
      appBaseUrl: "http://localhost:3000/",
      apiBaseUrl: "http://localhost:4000/",
    },
    prod: {
      appBaseUrl: "https://minecraft-italia.it/",
      apiBaseUrl: "https://api.minecraft-italia.it/",
    }
  },

  links: {
    patreon: 'https://patreon.com/minecraftit',
    gameassist: {
      android: 'https://play.google.com/store/apps/developer?id=GameAssist'
    }
  }
}
