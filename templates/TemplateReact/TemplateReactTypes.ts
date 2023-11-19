export type TemplateReactPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type TemplateReactPropsOutType = Record<string, any>

/**
 * @import import { TemplateReactType } from './TemplateReactType'
 */
export interface TemplateReactComponentType
  extends React.FunctionComponent<TemplateReactPropsType> {
  (props: TemplateReactPropsType): React.ReactElement
}

export type TemplateReactType = React.FunctionComponent<TemplateReactPropsType>
