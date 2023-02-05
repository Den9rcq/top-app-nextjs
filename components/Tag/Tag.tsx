import { ITagProps } from './Tag.props'
import classNames from 'classnames'
import styles from './Tag.module.css'

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  className,
  children,
  ...props
}: ITagProps): JSX.Element => {

  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.gray]: color == 'gray',
        [styles.green]: color == 'green',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href
        ? (
          <a href={href}>
            {children}
          </a>
        )
        : <>{children}</>
      }
    </div>
  )
}
