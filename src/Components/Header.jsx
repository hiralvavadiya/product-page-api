import { FaSearch } from "react-icons/fa";
import React from 'react'

function Header() {
  return (
    <>
        <div>
        <header>
          <div className='main-menu'>
            <div className='menu-text'>
            </div>
            <div className='side-menu'>
              <div class="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit"><FaSearch className='icon-side'/></button>
                </form>
              </div>
            </div>
          </div>
        </header>
        </div>
    </>
  )
}

export default Header