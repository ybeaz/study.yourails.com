import 'styled-components'

interface Dictionary {
  Light: [string, number, number, number, number]
  Dark: [string, number, number, number, number]
}
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorFirst: Dictionary
      colorSecond: Dictionary

      colorGrey: Dictionary

      colorActive: Dictionary
      colorBoxes: Dictionary
    }
  }
}
