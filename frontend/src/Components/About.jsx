import React from 'react'

function About() {
  return (
    <>
    <div className="flex h-screen items-center justify-center ">
<div>
    <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="name" />
</label><br/>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="email.com" />
</label><br/>
<textarea className=" textarea textarea-bordered" placeholder="your query"></textarea>
<br/>
<a href='/'>

<button  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pin-700 duration-200">Submit</button>
</a>
<br/>
    </div>
    </div>
    </>
  )
}

export default About
