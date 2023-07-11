import { useEffect, useState } from "react";
import firebase from '../firebase';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const SubTitle = styled.p`
font-size: 20px;
`;

const Post = styled.div`

border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover{
    border: 1px solid blue;
  }

  h3{
    margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: bold;
  color: black;

  &:hover{
    color: #2196f3;
  }
  
  }

  a{
    text-decoration: none;
  }

  @media (max-width:800px){
    border: 1px solid pink;
  }

`;

function Home() {

  const[posts,setPosts]= useState([]);

  useEffect(()=>{

    firebase.firestore().collection('posts').get()
    .then((snapshot)=>{

      const posts = snapshot.docs.map((doc)=>
      {
        return {
          id:doc.id,
          ...doc.data()
        }
      })

      console.log(posts)
      setPosts(posts)
    })
  },[])


    return (
      <div className="home">

      <BlogHeading>Tech Blog</BlogHeading>
      {/* <button className="createPostBtn">Create Post</button> */}
      <div id="blog-by">Ayush</div>

      {posts.map((post,index)=>{

          return(
            <Post className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
          </Link>
         
         <SubTitle>{post.subTitle}</SubTitle>
        </Post>
          )

      })}
  
      </div>
    );
  }
  
  export default Home;

  const styles = {
    heading:{
      marginTop:20,
      fontSize:56
    }
  }