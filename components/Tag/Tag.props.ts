import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 's' | 'm'
  color?: 'ghost' | 'gray' | 'green' | 'red' | 'primary'
  href?: string
  children: ReactNode
}
