
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UserList from './components/userlist/UserList'

import {useState} from 'react'
import NewUserForm from './components/newuser/NewUserForm'

function App() {

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    
    setUsers((prev) => {
      return prev.filter((user)=>{
          return user.id !==id
      })
    });
  }

  const addUser = (user) =>{
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  const closeModal = (e) => {
    if(e.target.className === 'overlay') setShowModal(false);
    if(e.key === 'Escape') setShowModal(false);
  }
  


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      
      <Navbar usersLength={users.length}/>
      <main>
        <div className='no-users'>
          {users.length ===0 && <h2>No Users</h2>}
        </div>
        <UserList users = {users} handleDelete = {handleDelete}/>
      </main>
      {showModal && <NewUserForm addUser = {addUser} />}
      <button className='create-user' onClick={() => setShowModal(true)}>Create user</button>
      <Footer />
    </div>
  )
}


export default App
