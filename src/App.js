import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getLocalStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } 
  return theme
}

function App() {
  const [articles, setArticles] = useState(data);
  
  const [theme, setTheme] = useState(getLocalStorageTheme)

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else if (theme === "dark-theme") {
      setTheme("light-theme");
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])


  return <main>
    <nav className='nav-center'>
      <h1>overreacted</h1>
      <button className="btn" onClick={changeTheme}>toggle</button>
    </nav>
    <section className="articles">
      {articles.map((article) => {
        return <Article key={article.id} {...article} />
      })}
    </section>
  </main>
}

export default App
