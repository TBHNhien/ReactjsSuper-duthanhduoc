import React from 'react'
import { useState } from 'react'

const initialAddress = () => {
  console.log('initialAddress')
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  }
}

export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initialAddress) //chỉ chuyển tên function vào thì chỉ chạy lần đầu tránh việc chạy lại khi chuyền cả hàm vao initialAddress()

  //   nếu chỉ muốn re render component thôi ,không muốn tạo 1 state mới thì
  const [, forceRerender] = useState(0)

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const rerender = () => forceRerender((prevState) => prevState + 1)

  //cach 1 :
  //   const changeCity = () => {
  //     setAddress({
  //       nation: 'Vietnam',
  //       city: 'Hanoi'
  //     })
  //   }

  //cach 2 :
  const changeStreet = () => {
    // address.city = 'Hanoi'
    // setAddress(address)
    // setAddress((prevAddress) => ({ ...prevAddress, city: 'Hanoi' }))
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '100 Dien Bien Phu, Da Nang'
      return {
        ...prevAddress,
        city: newCity
      }
    })
  }

  console.log('Re-render')

  return (
    <div>
      <div>
        <h1>User functrional component</h1>
        <ul>
          <li>First Name: {firstName}</li>
          <li>Age: {age}</li>
          <li>Nation: {address.nation}</li>
          <li>Street: {address.city.street}</li>
          <li>House: {address.city.house}</li>
        </ul>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={rerender}>Rerender</button>
        <button onClick={changeStreet}>Change street</button>
      </div>
    </div>
  )
}
