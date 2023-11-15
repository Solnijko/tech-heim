import './header.css'
import '../index.css'

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-top">
            <button className="icon menu-btn"></button>
            <a href="#" className="mainpage-link">Tech Heim</a>
            <div className="top-right">
              <button className="icon busket"></button>
              <button className="icon user"></button>
            </div>
          </div>
          <div className="search-box">
            <input type="text" name="search" id="search" className='search' placeholder='What can we help you to find ?'/>
            <button type="submit" className='icon search-btn'></button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header