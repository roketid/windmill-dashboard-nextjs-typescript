import React from 'react'

interface ISectionTitle{
  children: React.ReactNode
}

function SectionTitle({ children }: ISectionTitle) {
  return <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{children}</h2>
}

export default SectionTitle
