// import logo from './logo.svg';
import './App.css';
// import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'

const myAPI = "api2a329a73"
const path = '/customers'; 

const App = () => {
  const [input, setInput] = useState("")
  const [customers, setCustomers] = useState([])

  //Function to fetch from our backend and update customers array
  function getCustomer(e) {
    let customerId = e.input
    API.get(myAPI, path + "/" + customerId)
       .then(response => {
         console.log(response)
         let newCustomers = [...customers]
         newCustomers.push(response)
         setCustomers(newCustomers)

       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    <div className="page-container">
      <div className="App">
        <h1 className="title">AWS Amplify REST API</h1>
        <h2 className="desc">This app is built with Reactjs frontend and Nodejs backend. <br/> Hosted with AWS Amplify utilizing REST API.</h2>

        <div >
            <input placeholder="Enter Customer Name" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
        </div>

        <br/>
          <button className="button1" onClick={() => getCustomer({input})} >Generate</button>

        <h2 className="title2" style={{visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Account ID from Backend</h2>
        
        {
        customers.map
        ((thisCustomer, index) => 
              {
                return (
                  <div className="response" key={thisCustomer.customerId}>
                    <span>
                    <b>Customer Name</b>: {thisCustomer.customerName} &nbsp;&nbsp;&nbsp;&nbsp; <b>Customer ID</b>: {thisCustomer.customerId}  
                    </span>
                  </div>
                  )
              }
          )
        }
        <footer className="footer">Created by Mobenul Haq - <a href="https://mobenh.com/" target="_blank" rel="noreferrer">mobenh.com</a></footer>
      </div>
      
    </div>
  )
}

export default App;