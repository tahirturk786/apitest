import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [trackingDetail, setTracking] = useState("")
  const [trackingNumber, setTrackingNo] = useState("")

  const track =() =>{
    //let url ="http://codapi.daewoo.net.pk/api/booking/quickTrack?trackingNo=222223457";
    let url ="https://teamsuit.co/reportsv/2/api/products/getAll.php";
    // fetch(url,{
    //   method:'POST',
    //   headers:{
    //     'Content-type':'application/json',
    //   }
    // })
    // .then(res=>{
    //   console.log('response', res);
    // })
    // .catch(err =>{
    //   console.log('Error',err);
    // })
    axios.get(url)
          .then((data) => console.log("response",data));
  }
  return (
    <section>
      <div className='search'>
        <h1>Search Api</h1>
        <input type="text" name="api" id="" />
        <button onClick={()=>track()}>Submit</button>
      </div>

       <div className="container">
        <div>
          <table>
            <tr>
              <td>Tracking Id</td>
              <td>1234</td>
            </tr>
            <tr>
              <td> Sender name</td>
              <td>tahir</td>
            </tr>
            <tr>
              <td> reciever name</td>
              <td>tahir</td>
            </tr>
            <tr>
              <td> destinatio</td>
              <td>tahir</td>
            </tr>
            <tr>
              <td> post area</td>
              <td>tahir</td>
            </tr>
          </table>
        </div>
        </div> 
      
    </section>
    
  )
}

export default Home