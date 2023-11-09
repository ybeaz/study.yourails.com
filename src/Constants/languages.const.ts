import { ILanguages } from '../Interfaces/ILanguages'
import { SERVERS_MAIN } from '../Constants/servers.const'

export const SVG_FILE_DIR: string = `${SERVERS_MAIN.remote}/images/languages/`

/**
 * @description Const to define languages to select
 * @reference See src/Constants/languagesAll.const.ts
 */
export const LANGUAGES: ILanguages = {
  eng: {
    '639-1': 'en',
    '639-2': 'eng',
    de: ['Englisch'],
    en: ['English'],
    fr: ['Anglais'],
    ru: ['Английский'],
    svgFile: 'en.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/English_language',
  },
  zho: {
    '639-1': 'zh',
    '639-2': 'zho',
    de: ['Chinesisch'],
    en: ['Chinese'],
    fr: ['Chinoise'],
    ru: ['Китайский'],
    svgFile: 'zh.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Mandar_language',
  },
  hin: {
    '639-1': 'hi',
    '639-2': 'hin',
    de: ['Hindi'],
    en: ['Hindi'],
    fr: ['Hindi'],
    ru: ['Хинди'],
    svgFile: 'hi.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Hindi_language',
  },
  spa: {
    '639-1': 'es',
    '639-2': 'spa',
    de: ['Spanisch'],
    en: ['Spanish', 'Castilian'],
    fr: ['Espagnol', 'Castillan'],
    ru: ['Испанский'],
    svgFile: 'es.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Spanish_language',
  },
  ara: {
    '639-1': 'ar',
    '639-2': 'ara',
    de: ['Arabisch'],
    en: ['Arabic'],
    fr: ['Arabe'],
    ru: ['Арабский'],
    svgFile: 'ar.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Arabic_language',
  },
  ben: {
    '639-1': 'bn',
    '639-2': 'ben',
    de: ['Bengali'],
    en: ['Bengali'],
    fr: ['Bengali'],
    ru: ['Бенгали'],
    svgFile: 'bn.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bengali_language',
  },
  fra: {
    '639-1': 'fr',
    '639-2': 'fra',
    '639-2/B': 'fre',
    de: ['Französisch'],
    en: ['French'],
    fr: ['Français'],
    ru: ['Французский'],
    svgFile: 'fr.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/French_language',
  },
  rus: {
    '639-1': 'ru',
    '639-2': 'rus',
    de: ['Russisch'],
    en: ['Russian'],
    fr: ['Russe'],
    ru: ['Русский'],
    svgFile: 'ru.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Russian_language',
  },
  por: {
    '639-1': 'pt',
    '639-2': 'por',
    de: ['Portugiesisch'],
    en: ['Portuguese'],
    fr: ['Portugais'],
    ru: ['Португальский'],
    svgFile: 'pt.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Portuguese_language',
  },
  urd: {
    '639-1': 'ur',
    '639-2': 'urd',
    de: ['Urdu'],
    en: ['Urdu'],
    fr: ['Ourdou'],
    ru: ['Урду'],
    svgFile: 'ur.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Urdu_language',
  },
  ind: {
    '639-1': 'id',
    '639-2': 'ind',
    de: ['Bahasa Indonesia'],
    en: ['Indonesian'],
    fr: ['Indonésien'],
    ru: ['Индонезийский'],
    svgFile: 'id.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Indonesian_language',
  },
  deu: {
    '639-1': 'de',
    '639-2': 'deu',
    '639-2/B': 'ger',
    de: ['Deutsch'],
    en: ['German'],
    fr: ['Allemand'],
    ru: ['Немецкий'],
    svgFile: 'de.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/German_language',
  },
  jpn: {
    '639-1': 'ja',
    '639-2': 'jpn',
    de: ['Japanisch'],
    en: ['Japanese'],
    fr: ['Japonais'],
    ru: ['Японский'],
    svgFile: 'ja.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Japanese_language',
  },
  kor: {
    '639-1': 'ko',
    '639-2': 'kor',
    de: ['Koreanisch'],
    en: ['Korean'],
    fr: ['Coréen'],
    ru: ['Корейский'],
    svgFile: 'ko.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Korean_language',
  },
  ukr: {
    '639-1': 'uk',
    '639-2': 'ukr',
    de: ['Ukrainisch'],
    en: ['Ukrainian'],
    fr: ['Ukrainien'],
    ru: ['Украинский'],
    svgFile: 'uk.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Ukrainian_language',
  },
}
