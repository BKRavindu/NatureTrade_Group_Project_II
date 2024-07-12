import React from 'react'

import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'

function CollectorStore() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

    return(
        <>
        <NavBar/>
        <div className='flex'>
            <SideBar/>
        </div>
        </>
    )
}


export default CollectorStore