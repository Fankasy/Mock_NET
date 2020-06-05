import React from "react";

function List({ list, cssName, handleChange, btnText })  {
    return (
        <div className = "list">
            {
                list.map((elem, index) => {
                    return (
                        <div className ="item" key={index}>
                            <img src={elem.img} alt="image not found" className="image" />
                            <div>{elem.title}</div>
                            <button className={cssName} onClick={() => handleChange(elem.id)}>
                                {btnText}
                            </button>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}
export default List;