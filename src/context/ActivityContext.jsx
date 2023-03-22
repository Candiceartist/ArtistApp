import { createContext, useState } from "react";

const StudentContext = createContext();

export const Provider = ({ children }) => {
   
    const [AcitvityData, setActivityData] = useState({
     activities: [
        {
          name: 'Cait Yomorta',
          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
          scores: 
        
    
        },





          
    







     ]        
    })
    return (
      <StudentContext.Provider value={obj}>{children}</StudentContext.Provider>
    );  
};  

export default ActivityContext