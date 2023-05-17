import "./App.css"

/**
 * Displays the movie with the specified image
 * Could display no image if no movie with that image
 * @param {Object,String} children,image movie object and an image path
 * @returns 
 */
function Card({ children,image}) {
  return (    
     <div className="card">   
     <img className="card-img" src={image} alt=""></img>
        {children}   
     </div>  
  );
}

export default Card