import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'md', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            'py-12 md:py-16': spacing === 'sm',
            'py-16 md:py-24': spacing === 'md',
            'py-24 md:py-32': spacing === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }
