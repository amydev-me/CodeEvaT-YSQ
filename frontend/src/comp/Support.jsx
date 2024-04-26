import React, { Fragment, useState } from 'react';
import '../assets/css/Support.css';  
import Legal from './Legal';
import Contact from './Contact';

function App() {
  const [activeTab, setActiveTab] = useState('contact');

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  let content;

  if(activeTab === 'contact') {
    content =  <Contact />;
  }else{
    content = <Legal />;
  }

  return (
    <Fragment>
      <div className="content-left">
        <ul className="nav-links">
          <li><a href="#" className={activeTab === 'contact' ? 'active' : ''} onClick={() => showContent('contact')}>Contact</a></li>
          <li><a href="#" className={activeTab === 'legal' ? 'active' : ''} onClick={() => showContent('legal')}>Legal</a></li>
        </ul>
      </div>

      <div className="content-right">
        <div className="content"> 
          <div className="contact-details">
            { content }
          </div>
        </div> 
      </div> 
    </Fragment>
  );
}

export default App;
