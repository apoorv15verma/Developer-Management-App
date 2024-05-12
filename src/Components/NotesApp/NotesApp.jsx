import './App.css'
// import Header from './Components/Header'
import Notes from './Components/Notes'

function NotesApp() {

  return (
    <div className='main'>
     <h2 className='header' style={{color:"white"}}>Notes</h2>
      <Notes />
    </div>
  )
}

export default NotesApp
