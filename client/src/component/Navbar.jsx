import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
  ]

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >

      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className={`h-9 ${
            isScrolled ? 'invert opacity-80' : ''
          }`}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}

            <div
              className={`${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${
            isScrolled
              ? 'text-black border-black'
              : 'text-white border-white'
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-4">

        {/* Search */}
        <button type="button">
          <img
            src={assets.searchIcon}
            alt="Search"
            className={`h-7 transition-all duration-500 ${
              isScrolled ? 'invert' : ''
            }`}
          />
        </button>

        {/* Authentication */}
        {user ? (
          <UserButton > 
            
          </UserButton>
        ) : (
          <button
            type="button"
            onClick={() => openSignIn()}
            className="px-8 py-2.5 rounded-full ml-4 bg-black text-white transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <img
            src={assets.menuIcon}
            alt="Menu"
            className={`h-5 ${
              isScrolled ? 'invert' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >

        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={assets.closeIcon}
            alt="Close menu"
            className="h-6"
          />
        </button>

        {/* Mobile Links */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Dashboard */}
        <Link
          to="/dashboard"
          onClick={() => setIsMenuOpen(false)}
          className="border border-black px-4 py-1 text-sm font-light rounded-full cursor-pointer"
        >
          Dashboard
        </Link>

        {/* Mobile Authentication */}
        {user ? (
          <UserButton />
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false)
              openSignIn()
            }}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Login
          </button>
        )}

      </div>

    </nav>
  )
}

export default Navbar