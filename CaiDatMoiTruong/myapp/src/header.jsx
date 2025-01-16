import { Children } from 'react'

const lastName = 'Nhien'

const sum = (a, b) => a + b

const element = (
  <h1>
    hello, world!. I am {lastName}. Sum is {sum(10, 15)}
  </h1>
)

//Tên thuộc tính phải chuyển thành camelCase (bới vì jsx này gần với js hơn là với html )
const element2 = (
  <a href='google.com' tabIndex='11' className='123' id='the-a'>
    Google
  </a>
)

const element3 = <h3 />

const element4 = <img src='' />

const element5 = <input type='text' />

const comment = `<script> console.log("send token") </script>`

const element6 = <h1>Hello, world</h1>

//babel biên dịch
// const element6 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
// )

// => return chúng ta object
const element61 = {
  type: 'h1',
  props: {
    className: ' greeting',
    children: 'Hello, world!'
  }
}
