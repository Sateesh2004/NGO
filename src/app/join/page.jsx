import React from 'react'

const page = () => {
  return (
    <div>


<div className="bg-white border-4 rounded-lg shadow relative m-10">

<div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">
        Join Us
    </h3>
   
</div>

<div className="p-6 space-y-6">
    <form action="#">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                <input type="text" name="Name" id="Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g., John Doe" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                <input type="email" name="Email" id="Email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g., xyz@gmail.com" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Contact" className="text-sm font-medium text-gray-900 block mb-2">Contact</label>
                <input type="tel" name="Contact" id="Contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g., +91 XXXXXXXXXX" required=""/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="State" className="text-sm font-medium text-gray-900 block mb-2">State</label>
                <input type="text" name="State" id="State" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g., Madhya Pradesh" required=""/>
            </div>
            <div className="col-span-full">
                <label htmlFor="Address" className="text-sm font-medium text-gray-900 block mb-2">Address</label>
                <textarea id="Address" rows="6" name="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="e.g., Civil Line, Street no. 4"></textarea>
            </div>
        </div>
    </form>
</div>

<div className="p-6 border-t border-gray-200 rounded-b">
    <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
</div>

</div>
    </div>
  )
}

export default page
