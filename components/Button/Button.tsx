import classNames from 'classnames'
import { IButtonProps } from './Button.props'
import ArrowIcon from './arrow.svg'
import styles from './Button.module.css'

export const Button = ({
  appearance, className,
  arrow = 'none',
  children,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        styles.button,
        appearance == 'primary' ? styles.primary : null,
        appearance == 'ghost' ? styles.ghost : null,
        className
      )}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span className={classNames(styles.arrow, {
            [styles.down]: arrow == 'down',
            [styles.right]: arrow == 'right'
          }
        )}>
          <ArrowIcon/>
        </span>
      )}
    </button>
  )
}
