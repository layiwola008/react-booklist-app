import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './App.css';
import { books } from './books'
import GoodBook from './Book'

//no changes made yet 

function Booklist(){
  return (
  <section className="bookContainer">
    {books.map((book) => {
    // const { img, title, author} = book;
    
    return (
      <div>
        <GoodBook key={book.id} {...book}></GoodBook>       
      </div>
    )
    })}
  </section>
  
  );
}




 
ReactDOM.render(<Booklist/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

























// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App';
// import './App.css';


// const Booklist = () => {
//   return (

//     <>
//       <div className="bookContainer">
//         <div>
//           <Book1 />
//           <Title1 />
//           <Author1 />
//         </div>
//         <div>
//           <Book2 />
//           <Title2 />
//           <Author2 />
//         </div>
//         <div>
//           <Book3 />
//           <Title3 />
//           <Author3 />
//         </div>
//       </div>


//       <div className="bookContainer">
//         <div>
//             <Book4 />
//             <Title4 />
//             <Author4 />
//           </div>
//           <div>
//             <Book5 />
//             <Title5 />
//             <Author5 />
//           </div>
//           <div>
//             <Book6 />
//             <Title6 />
//             <Author6 />
//           </div>
//       </div>

//     </>
//   )
// }


// const Book1 = () => {return (<article><Image1></Image1></article>)}
// const Image1 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/41M-MhH6dNL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title1 = () => {return (<p>The Dirt</p>)}
// const Author1 = () => {return (<p>by Tommy Lee</p>)}

// const Book2 = () => {return (<article><Image2></Image2></article>)}
// const Image2 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/51kratVBF8L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title2 = () => {return (<p>Nöthin' But a Good Time</p>)}
// const Author2 = () => {return (<p>by Tom Beaujour</p>)}

// const Book3 = () => {return (<article><Image3></Image3></article>)}
// const Image3 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/41NFgdyLMHL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title3 = () => {return (<p>The Rise, Fall and Rebirth of Hair Metal</p>)}
// const Author3 = () => {return (<p>by Christopher P. Hilton</p>)}

// const Book4 = () => {return (<article><Image4></Image4></article>)}
// const Image4 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/41mqLH1x-vL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title4 = () => {return (<p>Dirty Rocker Boys</p>)}
// const Author4 = () => {return (<p>by Bobbie Brown</p>)}

// const Book5 = () => {return (<article><Image5></Image5></article>)}
// const Image5 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/51bLTk-xzLS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title5 = () => {return (<p>The First 21</p>)}
// const Author5 = () => {return (<p>by Nikki Sixx</p>)}

// const Book6 = () => {return (<article><Image6></Image6></article>)}
// const Image6 = () => {return (<img src="https://images-na.ssl-images-amazon.com/images/I/41Fc3jI2C9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt=""/>)}
// const Title6 = () => {return (<p>Eruption</p>)}
// const Author6 = () => {return (<p>by Brad Tolinski</p>)}



// ReactDOM.render( <Booklist />, document.getElementById('root'));


