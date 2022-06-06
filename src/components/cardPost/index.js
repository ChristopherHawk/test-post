import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fetchData} from '../../client';
import {LikeIcon} from '../../assets/index'
import './index.css'

const CardPost = ({image, title, description, extra, id, likes, tags, postImg, setFilterByTag}) => {
  const [comments, setComments] = useState([])


  const getData = async() =>{
    const responseApi = await fetchData(`/post/${id}/comment`, 'get')
    if(responseApi){
      setComments(responseApi.data)
    }
  }


  useEffect(() => {
    getData()
   
   }, [])
   
  return (  
    <div className='card-post'>
      <div className='left-column'>
      <img src={postImg} className="post-img" alt="..."/> 
      <div className='user-info'>
      <img src={image} className="img" alt="..."/>    
      <p className='name-user'>{title}</p>
      <div className='div-likes'>{likes}<img src={LikeIcon} className="icon-like" alt="..."/></div>  
      </div>
      </div>
      <div className='right-column'>
        <p className='post-content'><b>Publicación:</b><br/>{description}</p>
        {comments.length > 0 && <div className='div-comments'> {comments.map((item,key) =>(
       <div className='comments' key={key}>
         <img src={item.owner.picture} alt=""/>
         <p>{item.message}
         <br/>
         {Date(item.publishDate).slice(0,10)}</p>
       </div>
      ))}</div>}
      {comments.length === 0 && <div> No hay comentarios</div>}
      {comments.length === 0 &&<br/>}
      <header>Etiquetas:</header>
      <div  className='tags-div'>{tags.map((item, key) => (<p onClick={()=> {setFilterByTag(item)}} className='tags' key={key}>{item}</p>))}</div>
      </div>
    </div>
 
  );
}


CardPost.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  likes: PropTypes.number,
  extra: PropTypes.string
}
CardPost.defaultProps = {
  image:'',
  title: 'Título',
  description:'agregue descripción',
  extra: 'agregue pie de página',
  likes: 0
}
 
export default CardPost;