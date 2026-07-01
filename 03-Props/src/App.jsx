import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parant'>
      <Card user='Prithviraj' age={16} img='https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt= "Image is NOt Found" />
      <Card user='Shambhuraj' age={21} img='https://images.unsplash.com/photo-1778330520628-c52751f86b0c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt= "Image is NOt Found" />

    </div>
  )
}

export default App





