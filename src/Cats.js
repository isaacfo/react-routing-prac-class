import React from "react"
// grabbing individual link component from that library
import {Link} from "react-router-dom"


const Cats = (props) => {
    return (
        <div>
            <h1>Catssss!</h1>
            <ul>
                <li>
                  <Link to ="/cats/oakley">Oakley</Link>
                </li>
                <li>
                  <Link to="/cats/milla">Milla</Link>
                </li>
          </ul>
        
        </div>
    );
};


export default Cats;

