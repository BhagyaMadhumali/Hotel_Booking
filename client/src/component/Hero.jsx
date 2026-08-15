import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${assets.heroImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-12 text-white">

        <p className="inline-block bg-[#49B9FF]/70 px-4 py-1.5 rounded-full text-sm">
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold max-w-2xl mt-5">
          Discover Your Perfect Getaway Destination
        </h1>

        <p className="max-w-xl mt-5 text-sm md:text-base leading-relaxed">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey with us today!
        </p>

        {/* Search Form */}
        <form className="mt-8 bg-white text-gray-500 rounded-xl p-5 flex flex-col md:flex-row mt-8 gap-4 w-full max-w-5xl shadow-xl">

          {/* Destination */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                src={assets.locationIcon}
                alt=""
                className="w-4 h-4"
              />

              <label
                htmlFor="destinationInput"
                className="text-sm"
              >
                Destination
              </label>
            </div>

            <input
              list="destinations"
              id="destinationInput"
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-200 rounded-md px-3 py-2 mt-2 text-sm outline-none"
              required
            />

            <datalist id="destinations">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>

          {/* Check In */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt=""
                className="w-4 h-4"
              />

              <label
                htmlFor="checkIn"
                className="text-sm"
              >
                Check in
              </label>
            </div>

            <input
              id="checkIn"
              type="date"
              className="w-full border border-gray-200 rounded-md px-3 py-2 mt-2 text-sm outline-none"
              required
            />
          </div>

          {/* Check Out */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                src={assets.calenderIcon}
                alt=""
                className="w-4 h-4"
              />

              <label
                htmlFor="checkOut"
                className="text-sm"
              >
                Check out
              </label>
            </div>

            <input
              id="checkOut"
              type="date"
              className="w-full border border-gray-200 rounded-md px-3 py-2 mt-2 text-sm outline-none"
              required
            />
          </div>

          {/* Guests */}
          <div className="w-full md:w-24">
            <label
              htmlFor="guests"
              className="text-sm"
            >
              Guests
            </label>

            <input
              id="guests"
              type="number"
              min="1"
              max="4"
              placeholder="1"
              className="w-full border border-gray-200 rounded-md px-3 py-2 mt-2 text-sm outline-none"
              required
            />
          </div>

          {/* Search */}
          <button
  type="submit"
  className="bg-black text-white rounded-md px-6 py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
>
  <img
    src={assets.searchIcon}
    alt="Search"
    className="w-5 h-5 invert"
  />

  <span>Search</span>
</button>

        </form>
      </div>
    </section>
  )
}

export default Hero