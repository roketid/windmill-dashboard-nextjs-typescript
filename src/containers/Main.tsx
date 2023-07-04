import React from 'react'

interface IMain{
  children: React.ReactNode
}

function Main({ children }: IMain) {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  );
}

export default Main
