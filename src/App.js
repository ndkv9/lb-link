import React from 'react';
import LeadBarLink from "./components/LeadBarLink";


function App() {
  const logo1 = 'https://stripe-images.s3.us-west-1.amazonaws.com/works-with/0bf92fa8419e3237a6fb6eac9b1c225099f96741'
  const text1 = 'Click me for more discount!'
  const url = 'https://www.serviceform.com/'


  return (
    <div>
      <LeadBarLink url={url} text={text1} logo={logo1}/>
    </div>
  );
}

export default App;
