import React, { useEffect, useState} from 'react'
import Post from './Post';
const url = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {

  const usersStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  const [posts, setPosts] = useState([])



  useEffect(
    async () => {
      const respuesta = await fetch(url)
      const data = await respuesta.json()
      setPosts(data)
    },
    []
  );
  console.log(posts);

  return (
    <div style={usersStyle}>

      { posts.map( x =>{
        const {id, title, body} = x
        return <Post key={id} title={title} body={body} />
      }
      )}
      {/* */}

    </div>
  )
}

export default Posts
