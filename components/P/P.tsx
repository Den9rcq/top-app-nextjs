import { IPProps } from './P.props'
import classNames from 'classnames'
import styles from './P.module.css'

export const P = ({
  size = 'm',
  children,
  className,
  ...props
}: IPProps): JSX.Element => {

  return (
    <p
      className={classNames(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
