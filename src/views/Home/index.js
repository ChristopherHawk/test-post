import React, {useState, useEffect} from 'react';
import {fetchData} from '../../client';
import {CardPost} from '../../components/index'
import './index.css'
const Home = () => {

  const [post, setPost] = useState([])
  const [filterByTag, setFilterByTag]= useState('')
  const getPost = async() => {
    const responsePost = await fetchData('/post', 'get')
    if(responsePost){
      setPost(responsePost.data)
    }
    if(filterByTag !== ''){
      const responsePostFilter = await fetchData(`/tag/${filterByTag}/post`, 'get')
      if(responsePost){
        console.log(filterByTag)
        setPost(responsePostFilter.data)
      }
    }
  }
 
  

   useEffect(() => {
    getPost()
   
   }, [filterByTag])

 
  return (
  <div className='grid-post'>
    {post.map((item, key) => (
      <CardPost
      setFilterByTag={setFilterByTag} 
      key={key} 
      title={`${item.owner.firstName} ${item.owner.lastName}`} 
      description={item.text}
      image={item.owner.picture}
      extra={Date(item.publishDate)}
      likes={item.likes}
      id={item.id}
      tags={item.tags}
      postImg={item.image}
      />
    ))}

  </div>
  )
}

 

 


export default Home
