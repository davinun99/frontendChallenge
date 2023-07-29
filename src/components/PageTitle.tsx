import React from 'react'

const PageTitle = ({ title }: {title: string}) => (
  <header className='container'>
    <h3 className='shadow-sm rounded p-3 mt-5 text-center'>{title}</h3>
  </header>
)
export default PageTitle
