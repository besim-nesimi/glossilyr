import React from 'react'
import {Link} from "react-router-dom";

function Home() {
    return ( 

        <div>
        <h1>Home Page</h1>
        <Link to="/Glossary"><button>Click Here for Glossary Site</button></Link>
        </div>
     );
}

export default Home;