import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// require(`../Styles/theme${'Dark'}.less`)
import styles from './ThemeDark.style.less'

interface TemplateArgs {
  children: any
}

console.info('ThemeDark [11]', { styles })

export const ThemeDark: React.FunctionComponent<TemplateArgs> = (
  props: TemplateArgs
): JSX.Element => {
  return (
    <div className={styles.ThemeDark}>
      Dark111111111111111111{props.children}
    </div>
  )
}
