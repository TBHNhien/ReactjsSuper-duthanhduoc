import React, { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

export default function AutoBatching() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    flushSync(() => {
      setCount((c) => c + 1)
    })
    flushSync(() => {
      setFlag((f) => !f)
    })
    // React sẽ chỉ re-render một lần ở cuối (đó là batching)
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     flushSync(() => {
  //       setCount((c) => c + 1)
  //     })
  //     flushSync(() => {
  //       setFlag((f) => !f)
  //     })
  //     // React sẽ chỉ re-render một lần ở cuối (đó là batching)
  //   }, 1000)
  // }, [])

  console.log('render')
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      AutoBatching
    </div>
  )
}
