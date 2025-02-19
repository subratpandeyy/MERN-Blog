import { Link } from 'react-router-dom'
import AuthorImage from '../../src/assets/a1.jpg'

export default function PostAuthor() {
  return (
    <Link to={`/post/user/:id`} className='post-author'>
        <div className="post-author-image">
            <img src={AuthorImage} alt=""></img>
        </div>
        <div className="post-author-info">
            <h5>Subrat Pandey</h5>
            <small>just now</small>
        </div>
    </Link>
  )
}
