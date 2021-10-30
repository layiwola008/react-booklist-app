import React from 'react'


const Book = ({img, title, author})  => {
    // const {img, title, author} = props;
    //({ img, title, author, children })
  
    const buttonClicked = () => {
      // eslint-disable-next-line
      alert(title);
    }
  
    
    const complexTitle = () => {
      // eslint-disable-next-line
      console.log(author);
    }

    const handleMouseOver = () => {
      alert(title)
    }
  
    return (
    <article>
      <img src={img} alt="" onMouseOver={handleMouseOver}/>
      <h3>{title}</h3>
      <h4>{author}</h4>
      < button onClick={buttonClicked}>Click me!</button>
      < button onClick={complexTitle}>Learn More</button>
      {/* {props.children} */}
    </article>
    
    )
  }

export default Book

//book 
