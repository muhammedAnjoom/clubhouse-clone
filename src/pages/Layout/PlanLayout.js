import React from 'react'

function PlanLayout({children}) {
    return (
        <div style={{width:"100%", maxWidth:'500px',height:"100%", margin:'auto'}}>
            {children}
        </div>
    )
}

export default PlanLayout
