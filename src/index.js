// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// import React from 'react';
// import ReactDOM  from 'react-dom';
// const links = 'https://www.google.com/'
// var DateKhan = new Date().toLocaleTimeString();
// var upDate = new Date().toLocaleDateString();
// ReactDOM.render(
//    <>
//    <a href={links} target="_Talha">
//      <h1>Hello, My name is Talha</h1>
//      </a>
//      <p>Current Time is  {`${DateKhan}`} </p>
//      <p>Today Date is {`${upDate}`} </p>
//    </>,
//    document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './component/basic/style.css'
// // var heading = {
// //   margin : 'auto'
// // }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx'

// ReactDOM.render( 
//    <App/>,
//  document.getElementById('root')

// );

import React from 'react';
import ReactDOM from 'react-dom';
import './component/basic/style.css'
import FieldSet from './component/basic/Inputfiled.js'
// import Cart from './component/basic/Cart.jsx';
// import Menu from './component/basic/MenuApi.js'


ReactDOM.render(
  <>
    {/* <h1 className="heading_style" >The movies Only Netflix</h1>
    <Cart
      imgsrc={Menu[0].imgscr}
      title={Menu[0].title}
      pera={Menu[0].pera}
      link={Menu[0].link}
      button={Menu[0].button}  
      />

    <Cart
      imgsrc={Menu[1].imgscr}
      title={Menu[1].title}
      pera={Menu[1].pera}
      link={Menu[1].link}
      button={Menu[1].button}    
      />

    <Cart
      imgsrc={Menu[2].imgscr}
      title={Menu[2].title}
      pera={Menu[2].pera}
      link={Menu[2].link}
      button={Menu[2].button}      
      />

    <Cart
      imgsrc={Menu[3].imgscr}
      title={Menu[3].title}
      pera={Menu[3].pera}
      link={Menu[3].link}
      button={Menu[3].button}        
      />

    <Cart
      imgsrc={Menu[4].imgscr}
      title={Menu[4].title}
      pera={Menu[4].pera}
      link={Menu[4].link}
      button={Menu[4].button} 
      />
      <Cart
      imgsrc={Menu[4].imgscr}
      title={Menu[4].title}
      pera={Menu[4].pera}
      link={Menu[4].link}
      button={Menu[4].button} 
      />
       */}
       <div  class="main-contianers">
            <div class="container-contain">
                <form action="" id="form">
                    <h2>Registration Form</h2>
                    <div class="form-control">
                        <label for="username">Username</label>
                        <FieldSet placeholder="Enter Username" type="text"/>{/* <input type="text" id="username" placeholder="Enter your Username "/> */}
                      
                    </div>
                    <div class="form-control ">
                        <label for="email"  >Email</label>
                        <FieldSet placeholder="Enter Email" type="email"  />{/* <input type="text" id="email" placeholder="Enter email"/> */}
                        
                    </div>
                    <div class="form-control ">
                        <label for="email">Address</label>
                        <FieldSet placeholder="Enter Address" type="Address" />{/* <input type="text" id="Address" placeholder="Address"/> */}
                    </div>
                    <div class="form-control">
                        <label for="password">password</label>
                        <FieldSet placeholder="Enter password" type="password" />{/* <input type="password" id="password1" placeholder="Enter Password"/> */}
                    </div>
                    <div class="form-control">
                        <label for="password"> Comfirm password</label>
                        <FieldSet placeholder="Enter Comfirm Password" type="password" />{/* <input type="password" id="password2" placeholder="Enter password again"/> */}
                    </div>
                    <button class="Login1">LOGIN</button>
                    </form>
                    </div>
                    </div>
  </>,  
  document.getElementById('root')
  
  )
