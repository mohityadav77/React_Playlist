import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyChai(){
    return(
      <div>
        <h3>i am ready</h3>
      </div>
        
    )
};
// const reactelement={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherelement=(
  <a href='https://google.com' target='_blank'>visit to google</a>
);
const anothervariable=' chai and react'
const reactelement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click on me to visit',
  anothervariable


)
  
createRoot(document.getElementById('root')).render(
  
   <App />
  
)
