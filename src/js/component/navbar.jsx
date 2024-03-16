// 1. Import REACT
import React from "react";

// 2. Create component
const Navbar = () =>{
    return(

        
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={{color: "White"}}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
            
            </div>
        </div>
        
     
        
    )
}

// 3. Export Component
export default Navbar


// No puedo aplicar CSS al id="navbarstyle2";
//como mover la class de "Home, About, Services, Contacts" a la derecha?