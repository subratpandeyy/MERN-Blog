import { useState } from "react"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function EditPost() {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbImage, setThumbImage] = useState('')

  const postCategories = ['Education',
    'Discovery',
    'Technology',
    'Art',
    'Entertainment',
    'Business',
    'Investment',]

    // modules..............
    const modules = {
      toolbar: [
        [{'header': [1,2,3,4,5,6,false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '+1'}, {'indent': '-1'}],
        ['link', 'image'],
        ['clean']
      ]
    }

    // formats............
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]


  return (
    <section className='editPost'>
      <div className="container form-container editPost-container">
        <h2>Edit Posts</h2>
      <form className="form editPost-form">
          <p className="form-message">This is the invalid message</p>

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
                postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>

              <ReactQuill modules={modules} formats={formats} value={description}
              onChange={e => setDescription(e.target.value)}/>

          <input type='file' value={thumbImage} onChange={e => setThumbImage(e.target.value)} accept='png,jpg,jpeg'/>

          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    </section>
  )
}
