//Ojects containing data inside array with key:value pair
import React from "react";
function List(){
const people = [
  {
    name:'Tony Stark',
    id:1,
    profession:'Scientist',
  },
  {
    name:'Heisenberg',
    id:2,
    profession:'Chemist',
},
  {  
   name:'Bin Laden',
   id:3,
   profession:'Terrorist',
},
 {
  name:'Vijay Kumar',
  id:4,
  profession:'Police Officer',
},
 {name:'Monkey D Luffy',
  id:5,
  profession:' Pirate',
}
];
const chemists =people.filter(person => person.profession==='Chemist') //Used a filter method to display only Chemist
return(
<div>
<h1>List and Keys</h1>
<ul>
  {
   people.map((data) =>(
   <li key={data.id}>{data.name} : {data.profession}</li>
  ))
   }
</ul>
<u1>
  {
    chemists.map(person=><li>The only {person.profession} is {person.name}</li>)
  }
    
</u1>
</div>
)
}
export default List