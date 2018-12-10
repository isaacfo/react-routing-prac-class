import React from "react"
// grabbing individual link component from that library
import {Link} from "react-router-dom"


const Cats = (props) => {

    const catListItems = props.catList.map(catName => {
        return (
            <li>
                <Link to={`/cats/${catName}`}>{catName}</Link>
            </li>
        );
    });
    return (
        <div>
            <h1>Catssss!</h1>
            <ul>
                {catListItems}
                {/* <li>
                  <Link to ="/cats/oakley">Oakley</Link>
                </li>
                <li>
                  <Link to="/cats/milla">Milla</Link>
                </li> */}
          </ul>
        
        </div>
    );
};



export default Cats;

