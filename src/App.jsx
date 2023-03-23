import React from 'react'
import ChartComponent from './ChartComponent';

const Data = [
  {
    name: "building1",
    time: "1pm",
    power: 200
  },
  {
    name: "building1",
    time: "2pm",
    power: 500
  },
  {
    name: "building1",
    time: "3pm",
    power: 300
  },
  {
    name: "building2",
    time: "1pm",
    power: 400
  },
  {
    name: "building2",
    time: "2pm",
    power: 700
  },
  {
    name: "building2",
    time: "3pm",
    power: 800
  }
];


const App = () => {
  return (
    <div>
    
<ChartComponent data={Data}/>

    </div>
  )
}

export default App




















