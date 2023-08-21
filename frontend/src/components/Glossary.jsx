import React,{useEffect, useState} from 'react'
import getGlossaries from "./Fetch-backend";

function Glossary() {
    const [glossaryData, setGlossaryData] = useState([]);
    useEffect(() => {

        getGlossaries().then((data) => {
    
            setGlossaryData(data);
    
            console.log(data);
        });
    
      }, []);
    
    return ( 

<div >
              {glossaryData.map((item) => {

                // const imageSrc = imageMap[item.image];

                return (

                  <div>

                    <div >


                      <span> {item.name} <br /></span>
                      <input type="text"></input>


                    </div>

                  </div>

                );

              })}

              <button>Submit</button>
            </div>
     );
}

export default Glossary;