import { createApp } from 'vue'
import CivicUI, { applyPalette, configureLinks, generatePalette } from 'civic-ui'
import '@fontsource-variable/fraunces'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'
import '@fontsource/outfit/700.css'
import './styles/theme.css'
import App from './App.vue'
import router from './router'

applyPalette(
  generatePalette({
    primary: '#16120E',
    accent: '#C41502',
    secondary: '#B51300',
    tertiary: '#3A332C',
    quaternary: '#8A3B12',
    highlight: '#F5A800',
    neutralDark: '#1F1914',
    info: '#3A332C',
    bg: '#FAF5EE'
  })
)
configureLinks({ newTabLabel: '(öffnet in neuem Tab)' })

createApp(App).use(CivicUI).use(router).mount('#app')
