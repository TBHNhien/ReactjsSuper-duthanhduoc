import React, { useEffect } from 'react'
import { useState } from 'react'
import UserProfile from './UserProfile'
import { createContext } from 'react'

const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  }
}

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100, Nicolas, NY',
          house: 'Building'
        }
      })
    }, 3000)
  })
}

export const UserContext = createContext({
  address: {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'Building'
    }
  },
  age: 100,
  firstName: 'Nhien',
  increaseAge: () => {}
})

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

  // console.log('Re-render')

  //giống componentDidUpdate , effect function chạy lại
  // mỗi khi component re-render
  //   useEffect(() => {
  //     console.log(document.getElementsByTagName('li'))
  //     console.log('useEffect giống componentDidUpdate')
  //   })

  //Thường dùng để gọi API
  useEffect(() => {
    // console.log(document.getElementsByTagName('li'))
    // console.log('useEffect giống componentDidMount')
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress }
        newAddress.city = res.city
        return newAddress
      })
    })
    //clean up function
    return () => {
      console.log('Huy goi API')
    }
  }, [])

  // useEffect(() => {
  //   console.log('age', age)
  //   return () => {
  //     console.log('Clean Age')
  //   }
  // }, [age])

  return (
    <div>
      <div>
        <h1>User functrional component</h1>

        <UserProfile />

        <button onClick={rerender}>Rerender</button>
        <button onClick={changeStreet}>Change street</button>
      </div>
    </div>
  )
}
