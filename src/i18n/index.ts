import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

export const getI18n = ({ currentLocale }: { currentLocale: string }) => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH:
      return english
    case LANGUAGES.SPANISH:
      return spanish
    default:
      return spanish
  }
}
