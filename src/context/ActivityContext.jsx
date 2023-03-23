import { createContext, useState } from "react";

const ActivityContext = createContext();

export const Provider = ({ children }) => {
   
    const [activityData, setActivityData] = useState( 
        
        [
           {
                name:"Brooklyn Botanic Garden",
                address: '900 Washington Avenue at President Street Brooklyn NY 11225',
                what:"One of New York's most beautiful outdoor places, the garden is located next to the Brooklyn Museum and is right on the edge of Prospect Park. With 52 acres, the garden contains more than 12,000 plant varieties arranged by taxonomic order. Formal and informal gardens flow seamlessly into one another creating an aesthetically engaging unity throughout. The Local Flora Section consists of eight small ecosystems—native to within 100 miles of the garden—each with its unique species of trees, shrubs, wildflowers and mosses.",  
                pic:"https://www.nyc-arts.org/wp-content/uploads/2012/01/Bridge_to_Eden.jpg",
                day:"Tuesday"
            },
            {
                name:"Staten Island Museum",
                address:"75 Stuyvesant Place at Wall St Staten Island, NY 10301",
                what:"Few museums embrace a collection as eclectic as this: an assortment of hats, paintings by Marc Chagall and 500,000 insects. One can find these plus 2 million more artifacts and specimens at the Staten Island Museum of the Institute of Arts and Sciences. The museum was founded in 1881, making it one of the oldest cultural organizations in New York City.",
                pic:"https://www.nyc-arts.org/wp-content/uploads/2011/03/1-_Pre-Construction_Building_A.jpg",
                day:"Tuesday"
                
            },   
            {
                name:"",
                address:"",
                what:"",
                pic:"",
                day:""
            },
            {
                name:"",
                address:"",
                what:"",
                pic:"",
                day:""
            }
        ]        
    )
    
   const obj = {activityData}

    return (
      <ActivityContext.Provider value={obj}>{children}</ActivityContext.Provider>
    );  
};  

export default ActivityContext