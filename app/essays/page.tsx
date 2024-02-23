import React from 'react'
export async function generateStaticParams(){
    return {
      props : {
        pageId : 'essays'
      }
    }
  }

const page = () => {
  return (
    <div>page</div>
  )
}

export default page