import React from 'react';
import Link from 'next/link'

const index = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>this is service main page</h1>
            <Link href="/services/repair"><button>go to repair service</button></Link>
        </div>
    );
};

export default index;