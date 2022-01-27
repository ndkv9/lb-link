import React from 'react';
import LeadBarLink from "./components/LeadBarLink";

function App() {
  const logo1 = 'https://lh3.google.com/u/0/ogw/ADea4I7weFt0Z_euBRJDYIrQOD3bxFMC3USRqc-RXaRD=s83-c-mo'
  const logo2 = 'https://i.quotev.com/img/q/u/12/03/25/shika.jpg'
  const text1 = 'Click me for more discount!'
  const text2 = 'Click me for free!'
  const url = 'https://www.serviceform.com/'


  return (
    <div>
      <LeadBarLink url={url} text={text1} color="primary" logo={logo1}/>
      <LeadBarLink url={url} text={text2} color="secondary" logo={logo2}/>
    </div>
  );
}

export default App;
