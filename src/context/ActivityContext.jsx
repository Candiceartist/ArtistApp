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
                day:"Tuesday",
                link:"https://www.bbg.org"
            },
            {
                name:"Staten Island Museum",
                address:"75 Stuyvesant Place at Wall St Staten Island, NY 10301",
                what:"Few museums embrace a collection as eclectic as this: an assortment of hats, paintings by Marc Chagall and 500,000 insects. One can find these plus 2 million more artifacts and specimens at the Staten Island Museum of the Institute of Arts and Sciences. The museum was founded in 1881, making it one of the oldest cultural organizations in New York City.",
                pic:"https://www.nyc-arts.org/wp-content/uploads/2011/03/1-_Pre-Construction_Building_A.jpg",
                day:"Tuesday",
                link:"https://www.statenislandmuseum.org"
                
            },   
            {
                name:"Bronx Zoo",
                address:"Bronx River Parkway at Fordham Rd Bronx, NY 10460",
                what:"the largest urban zoo in the United States. Its woods, streams and parklands encompass 265 acres. Within this enclave live more than 4,000 animals representing some 1,000 species.",
                pic:"https://www.nyc-arts.org/wp-content/uploads/2011/03/Bronx_Zoo_001.jpg",
                day:"Wednesday",
                link:"https://bronxzoo.com"
            },
            {
                name:"Museum of Arts and Design",
                address:"Two Columbus Circle (between Eight Ave and Broadway) New York, NY 10019",
                what:"MAD focuses on contemporary creativity and the ways in which artists and designers from around the world transform materials through processes ranging from the artisanal to the digital.",
                pic:"https://aaqeastend.com/wp-content/uploads/2016/09/MAD-Exterior-Late-Day-23308.jpg",
                day:"Thursday",
                link:"https://madmuseum.org"
            },
            {
                name:"American Folk Art Museum",
                address:"2 Lincoln Square (Columbus Avenue at 66th Street New York, NY 10023)",
                what:"",
                pic:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/15/7f/71/every-story.jpg?w=1200&h=-1&s=1",
                day:"",
                link:"https://folkartmuseum.org"
            },
            {
                name:"Brooklyn Museum",
                address:"200 Eastern Parkway at Washington Avenue Brooklyn, NY 11238",
                what:"With a mission to create inspiring encounters with art that expand the ways we see ourselves, the world and its possibilities, the Brooklyn Museum is where great art and courageous conversations are catalysts for a more connected, civic, and empathetic world.",
                pic:"https://d1lfxha3ugu3d4.cloudfront.net/about/images/Facility_Rental_2021_S06_BEEi149_SL3_General_Use_JPEG_2000w.jpg",
                day:""
            },
            {
                name:"The Cloisters ",
                address:"Fort Tryon Park 99 Maragaret Corbin Drive New York, NY  10040",
                what:"",
                pic:"https://cdn.vox-cdn.com/thumbor/KP2M2isDRY-mIIVWujGCep0sofc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9570151/shutterstock_142124719.jpg",
                day:""
            },
            {
                name:"Metropolitan Museum of Art",
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