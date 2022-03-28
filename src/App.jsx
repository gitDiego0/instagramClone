import './App.css'
import Feed from './components/Feed/Feed'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Publication from './components/Publication/Publication'
import StoriesFeed from './components/StoriesFeed/StoriesFeed'

function App() {
  return (
    <div className="App">
      <Header />
      <StoriesFeed />
      <main>
        <Feed />
      </main>
      <Footer />
    </div>
  )
}

export default App
