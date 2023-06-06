// src/components/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
  return (
    <div>
      <POPOSSpace 
        image="150-california-st.jpg"
        name="150 California"
        address="150 California St."
      />
      <POPOSSpace
        image="343-sansome-st.jpg"
        name="343 Sansome"
        address="343 Sansome St."
        />
      <POPOSSpace 
        image="600-montgomery-st.jpg"
        name="Transamerica Redwood Park"
        address="600 Montgomery St."
      />
      <POPOSSpace 
        image="648-commercial-st.jpg"
        name="Empire Park"
        address="648 Commercial St."
      />
      <POPOSSpace 
        image="400-commercial-st.jpg"
        name="Embarcadero Center"
        address="400-492 Commercial St."
      />
      <POPOSSpace 
        image="555-california-st.jpg"
        name="555 California"
        address="555 California St."
      />
    </div>
  )
}

export default POPOSList
