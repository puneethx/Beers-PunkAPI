import React,{useState,useEffect} from 'react'
import "./home.css"
import Card from "../../components/Card/Card"

const Home = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80').then(
      response => response.json()
    ).then(json => setData(json))
  },[]);
  
  return (
    <div className='home'>
      {data.map(item => 
      <Card item={item} key={item.id} />
      )}
    </div>
  )
}

export default Home