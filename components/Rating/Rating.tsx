import { RatingProps } from './Rating.props'
import { useEffect, useState, KeyboardEvent } from 'react'
import StarIcon from './star.svg'
import classNames from 'classnames'
import styles from './Rating.module.css'

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        key={i}
        className={classNames(
          styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          }
        )}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}>
         <StarIcon
           tabIndex={isEditable ? 0 : -1}
           onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handelSpace(i + 1, e)}
         />
      </span>
    ))

    setRatingArray(updatedArray)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) return
    constructRating(i)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return

    setRating(i)
  }

  const handelSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return

    setRating(i)
  }

  return (
    <div {...props}>
      {ratingArray.map((r: JSX.Element, i: number) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}
