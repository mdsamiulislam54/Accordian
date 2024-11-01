import { useState } from "react"


const StarRating = () => {
    const numbar =[1,2,3,4,5]
    const [rating, setRating]= useState(0)
    const [hover, setHover] = useState(0)
    console.log(hover);
    console.log(rating);
  return (
    <div>
      <h1 className="text-[50px]">Star Rating</h1>
        {
          numbar.map((num)=>
            <button
            key={num}
            onClick={(()=> setRating (num))}
            onMouseOver={(()=> setHover(num))}
            onMouseLeave={(()=> setHover(rating))}
            
            >
              <span className={`text-[60px] mx-3 ${
               num <= Math.max(rating, hover) ? "text-red-600" : "text-black"
              }`}>&#9733;</span>
            </button>
          )
        }

    </div>
  )
}

export default StarRating