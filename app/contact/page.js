import React from 'react'

export const metadata = {
  title: "Shopster",
};

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-10 text-black'>
        <h1 className='text-2xl font-extrabold md:text-4xl lg:text-5xl'>Contact Us</h1>
          <section className="container max-w-3xl p-6 mx-auto mt-10 mb-10 text-xl">
            <form>
              <div className="mb-4">
                <label className="block mb-1">Your Name </label>
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Enter your name..."
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Your Email </label>
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Enter your email..."
                  name="email"
                />
              </div>
              <div className="mb-4 mt-5">
                <label className="block mb-1"> Your Message </label>
                <textarea
                  rows="4"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="Enter your message..."
                  name="description"
                ></textarea>
              </div>

             
              <div className="grid md:grid-cols-2 gap-x-2 mt-5">
                <div className="mb-4">
                  <label className="block mb-1"> Organization / Company Name </label>
                  <input
                    type="text"
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    placeholder="Enter your company name..."
                    name="company"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1"> Country </label>
                  <div className="relative">
                    <div className="col-span-2">
                      <input
                        type="text"
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Enter your country..."
                        name="country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
              >
                Send Message
              </button>
          </form>
      </section>
    </div>
  )
}

export default page