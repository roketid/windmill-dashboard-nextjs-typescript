import React from 'react'
import classNames from 'classnames'

interface IRoundIcon{
  icon: any
  className: string
  iconColorClass: string
  bgColorClass: string
}

function RoundIcon({ 
  icon, 
  iconColorClass = 'text-purple-600 dark:text-purple-100', 
  bgColorClass = 'bg-purple-100 dark:bg-purple-600',
  className
}: IRoundIcon) {
  const baseStyle = 'p-3 rounded-full'
  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className)
  return(
    <div className={cls}>
      {/* <Icon className="w-5 h-5" /> */}
    </div>
  )
}

export default RoundIcon
