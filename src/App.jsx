import { useState } from "react"
function App() {
  const [post, setPost] = useState([])
  const [newPost, setNewPost] = useState('')

  const sendPost = event => {
    event.preventDefault()
    console.log(newPost);

    setPost([...post, {
      id: Date.now(),
      title: newPost
    }])
    console.log(post);
    setNewPost('')
  }
  const deletePost = (id) => {
    const updatedPosts = post.filter((curPost) => curPost.id !== id);
    setPost(updatedPosts);
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={sendPost}>
          <div className="mb-3">
            <div className="text-center"><label htmlFor="articleName" className="form-label"><h1 className="text-white mt-4">Crea e salva il tuo nuovo articolo</h1></label></div>
            <textarea className="form-control" value={newPost} onChange={(event) => setNewPost(event.target.value)} />
            <div className="text-center mt-4"><button type="submit" className="btn btn-light">🖊️ Salva articolo 🖊️</button></div>
          </div>
        </form>
      </div>
      {(post.length > 0) ? post.map(curPost => <div key={curPost.id}>
        <h3 className="text-center text-white">ASCOLTATE TUTTI! ECCO IL TUO NUOVO ARTICOLO!</h3>
        <div className="text-center mb-3"><img src="../public/wp-16278334959737740266667711549875.png" alt="" /></div>
        <div class="card container">
          <div class="card-body text-center">
            {curPost.title}
          </div>
        </div>
        <div className="container text-center"> <button className="btn btn-danger mt-2" onClick={() => deletePost(curPost.id)}>🗑️ Elimina Articolo 🗑️</button></div>
      </div >
      ) : <p className="text-center text-white">Non ci sono articoli predefiniti! Prova a cercarli o a crearli con la barra apposita </p>}

    </>
  )
}

export default App
