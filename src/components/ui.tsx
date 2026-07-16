import type { CSSProperties, ReactNode } from 'react'

interface IconProps {
  name: string
  filled?: boolean
  className?: string
  style?: CSSProperties
}

export function Icon({ name, filled = false, className = '', style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

interface StarRatingProps {
  rating: number
  reviews: number
}

export function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5 text-secondary text-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name={star <= Math.floor(rating) ? 'star' : star - rating <= 0.5 ? 'star_half' : 'star'}
          filled={star <= Math.floor(rating)}
          className="text-sm"
        />
      ))}
      <span className="text-on-surface-variant ml-1">({reviews})</span>
    </div>
  )
}

interface StatusBadgeProps {
  children: ReactNode
  variant?: 'verified' | 'error' | 'pending' | 'ready'
}

export function StatusBadge({ children, variant = 'verified' }: StatusBadgeProps) {
  const styles = {
    verified: 'bg-secondary-container text-on-secondary-container',
    error: 'bg-error-container text-on-error-container',
    pending: 'bg-surface-container-highest text-on-surface-variant',
    ready: 'bg-secondary-container text-on-secondary-container',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  )
}
