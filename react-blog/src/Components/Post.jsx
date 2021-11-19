import React from 'react'

const Post = ({title, body}) => {

  const userStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    boxShadow: '4px 4px 20px #555',
    backgroundColor: '#FFF',
    width: '650px',
    margin: '20px',
  }

  return (
    <div style={userStyle}>
      <h2>{title}</h2>
      <h4>{body}</h4>
    </div>
  )
}

export default Post
