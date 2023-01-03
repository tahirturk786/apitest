import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [trackingDetail, setTracking] = useState('')
  const [trackingNumber, setTrackingNo] = useState('')

  const track =() =>{
    let url ="https://codapi.daewoo.net.pk/api/booking/quickTrack?trackingNo="+trackingNumber;
    axios.get(url, {
  mode: 'no-cors' // 'cors' by default
})
          .then((data) => {
            // console.log("response",data.data.Result)
            setTracking(data.data.Result.CurrentTrackStatus[0])
          });
  }
  return (
    <section>
      <div className='search'>
        <h1>Search Api</h1>
        <input type="text" name="api" id="" value={trackingNumber} onChange={(e) => setTrackingNo(e.target.value)} />
        <button onClick={()=>track()}>Submit</button>
      </div>

       <div className="container">
        <div>
          <table>
            <tr>
              <td>Tracking Id</td>
              <td>{trackingDetail.track_no}</td>
            </tr>
            <tr>
              <td> Sender name</td>
              <td>{trackingDetail.sender_name}</td>
            </tr>
            <tr>
              <td> reciever name</td>
              <td>{trackingDetail.receiver_name}</td>
            </tr>
            <tr>
              <td> destination</td>
              <td>{trackingDetail.destination_terminal}</td>
            </tr>
            <tr>
              <td> post area</td>
              <td>{trackingDetail.source_terminal}</td>
            </tr>
          </table>
        </div>
        </div> 
      
    </section>
    
  )
}

export default Home