import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        
        <span className="ms-1">&copy; 2022 </span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        <a href="" target="_blank" rel="noopener noreferrer">
          AutoDuka Admin
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
