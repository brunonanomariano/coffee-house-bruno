import React from "react";
import Item from "./Item";

const ItemList = ( {items} ) => {
    return(
        <div className="row">
                {items.map( item => ( 
                    <div key={item.id} className="col-md-4 my-3">
                        <Item title={item.title} 
                              price={item.price}
                              pictureUrl={item.pictureUrl}
                              id={item.id} />
                    </div>)                        
                )}
        </div>
    );
};

export default ItemList;