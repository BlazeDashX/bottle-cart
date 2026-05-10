import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {
  const bottlesPromise =fetch('./bottles.json').then(res => res.json());

  return (
    <>
      <h1>Buy Awasome Water Bottles</h1>
      <Suspense fallback={<div>Bottles are Loading...</div>}>
        <Bottles
        bottlesPromise={bottlesPromise}
        ></Bottles>
      </Suspense>
    </>
  )
}

export default App;
