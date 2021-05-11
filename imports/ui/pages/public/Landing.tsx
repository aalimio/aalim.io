import React from 'react'
import { Dashboard } from '/imports/ui/components/Dashboard/Dashboard.tsx'
import { List } from '/imports/ui/components/List/List.tsx'

const Title = () => (
  <div className='container flex flex-col justify-center space-y-2 space-x-2 mb-5'>
    <p className='text-3xl text-center m-5'>WIP: Aalim.io</p>
  </div>
)

export const Landing = () => {
  return (
    <div className='divide-y divide-gray-100'>
      <Title />
      <Dashboard />
      <List />
    </div>
  )
}
