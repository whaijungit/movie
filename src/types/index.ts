import { NavigationProp, ParamListBase } from '@react-navigation/native'

export interface Navigation<P, N extends string> extends NavigationProp<ParamListBase & P, N> { }
