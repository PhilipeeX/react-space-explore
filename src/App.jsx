import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF"/>
              <path fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
            </g>
          </svg>
        </div>
        <div className="header__nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
            </g>
          </svg>
        </div>
      </header>

      <section className="home">
        <section className="home__description">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </section>
        <section className="home__link">
          <div className="home__link-button--hovered">
            <button className="home__link-button">
              EXPLORE
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

export default App
