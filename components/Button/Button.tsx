import cn from 'classnames'
import { IButtonProps } from './Button.props'
import styles from './Button.module.css'

export const Button = ({ appearance, children, className, ...props }: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        appearance == 'primary' && styles.primary,
        appearance == 'ghost' && styles.ghost,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
