import React from 'react'

function FollowLoading() {
    return (
      <div className="animate-pulse my-3">
        <div className="border-gray-200 border-2 p-3 rounded-md flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div className='w-36 h-5 rounded-lg bg-gray-300'></div>
        </div>
      </div>
    );
}

export default FollowLoading
