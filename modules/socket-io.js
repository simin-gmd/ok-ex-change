import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  name: 'socket-io',
  setup(moduleOptions, nuxt) {
    nuxt.options.io = {
      sockets: [
        {
          name: 'main',
          url: 'wss://wsg.ok-ex.io/ws'
        }
      ]
    }
  }
})
