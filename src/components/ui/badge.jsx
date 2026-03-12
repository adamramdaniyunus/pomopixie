import React from 'react'
import cn from '../../utils/cn'

const Badge = ({label, className}) => {
  return (
    <span className={cn('bg-pomo-text text-lg rounded-full font-pixel text-pomo-white px-4 py-0.5 tracking-widest', className)}>
        {label}
    </span>
  )
}

export default Badge