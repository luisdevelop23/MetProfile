import React from 'react'
import iconLoading from './../assets/icons/loadingCard.svg'
const CLoading = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-12'>
        <img src={iconLoading} className='w-40 animate-spin ' alt="" />
      </div>
    </div>
  )
}

export default CLoading