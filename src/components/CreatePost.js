
import { useState } from "react";
import firebase from '../firebase';
import {useInput} from '../hooks';
// import classes from '../button.module.css'
import styled,{css} from 'styled-components';

const StyledButton = styled.button`
height: 33px;
background: ${(props)=>(props.primary?'#4caf50':'blue')};
border: 0;
color: #fff;
padding: 8px;
font-size: 15px;
border-radius: 3px;
cursor: pointer;

${(props) =>
  props.primary &&
  css`
    border: 4px solid ${props.bgColor};
  `};

`;


function CreatePost() {

  const title=useInput('');
  const subTitle =useInput('');
  const content =useInput('');

  function handleSubmit(event)
  {
    event.preventDefault();


    firebase.firestore().collection('posts').add(
      {
        title:title.value,
        subTitle:subTitle.value,
        content:content.value,
        createdAt:new Date()
      }
    ).then(()=>
    {
      console.log("Post Added Successfully")
    })
    .catch((error)=>{

      console.log("Error Occured",error)
    })

  }

    return (
      <div className="create-post">

        <h1>Create Post</h1>
        
        <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label>Title</label>
          <input {...title}/>
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <StyledButton >Create Post</StyledButton>
        <StyledButton primary bgColor="pink">Create Post</StyledButton>
        </form>
        
      </div>
    );
  }
  
  export default CreatePost;