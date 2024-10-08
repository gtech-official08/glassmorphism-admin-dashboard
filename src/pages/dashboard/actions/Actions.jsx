import React from 'react'
import Interviews from './interviews/Interviews'
import Platform from './platform/Platform'

const Actions = () => {
    return (
        <div className='md:w-1/3 w-full space-y-6'>

            {/* Interviews Section */}
            <Interviews />

            {/* Platform Section */}
            <Platform />

        </div>
    )
}

export default Actions
