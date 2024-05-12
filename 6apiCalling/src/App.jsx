import { useEffect, useState } from 'react'
import './App.css'
import { GetPosts, GetRandomUser } from "./Api/Api.js"
import PostCard from "./Components/PostCard"
import RandomUserCard from "./Components/RandomUserCard"


function App() {

  const [data, setData] = useState(null);

  const [randomUserData, setRandomUserData] = useState(null);


  // useEffect function for getting the data of posts
  useEffect(() => {
    GetPosts()
    .then((apiData) => apiData.json())
    .then((data) => setData(data));
      
  },[]);


  // useEffect function for getting the random user

  useEffect(() => {
      GetRandomUser()
      .then((apiResponse) => apiResponse.json())
      .then((data) => setRandomUserData(data))
  },[])

 


  return (
    <>
      {randomUserData && <RandomUserCard userCardData={randomUserData}/>}
      {data? data.map((post) => <PostCard key={post.id} cardData={post}/>) : <p>No Data</p>}
    

    </>
  )
}

export default App
