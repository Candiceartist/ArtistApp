import { createContext, useState } from "react";

const ActivityContext = createContext();

export const Provider = ({ children }) => {
   
    const [ActivityData, setActivityData] = useState({
     activity: [
           {
                place:"",
                what:"",
                pic:"",
                day:"",
                pic:"",
            },
            {
                place:"",
                what:"",
                pic:"",
                day:"",
                pic:"",
            },
            
            
        ]        
    })
    return (
      <ActivityContext.Provider value={Object}>{children}</ActivityContext.Provider>
    );  
};  

export default ActivityContext