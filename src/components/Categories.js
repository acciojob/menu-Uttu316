import React from "react"


const Categories = ({categories,filterItems}) => {

    return(
        <div className="btn-container">
            {
                categories.map((category,index)=>{
                    return(
                        <button id={`filter-btn-${index}`}
                            type="button"
                            className="filter-btn"
                            key={index}
                            onClick={()=>filterItems(category)}>
                                {category}
                        </button>
                    )
                })
            }    
        </div>
    )
}

export default Categories
