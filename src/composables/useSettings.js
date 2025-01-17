import { ref, watch } from 'vue'

const defaults = {
  version: 4,
  location: 'nazran',
  showDuhaa: true,
  theme: 'light',
}

const storageSettingsString = localStorage.getItem('settings')
const storageSettings = storageSettingsString ? JSON.parse(storageSettingsString) : null

const settings = ref(
  (storageSettings && storageSettings.version === defaults.version) ? storageSettings : defaults
)

watch(settings.value, newValue => localStorage.setItem('settings', JSON.stringify(newValue)))

export default function useSettings() {
  return {
    settings
  }
}