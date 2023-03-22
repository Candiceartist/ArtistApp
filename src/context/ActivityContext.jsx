import { createContext, useState } from "react";

const StudentContext = createContext();

export const Provider = ({ children }) => {
   
    const [AcitvityData, setActivityData] = useState({
     activities: [
        {
          place:"",
          what:"",
          pic:"",
          day:"",
    
        },





          
    







     ]        
    })
    return (
      <StudentContext.Provider value={obj}>{children}</StudentContext.Provider>
    );  
};  

export default ActivityContext