import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'


import postDetailImage from '../../src/assets/1.jpg'


export default function PostDetail() {
  return (
    <section>
      <div className="container postdetail-container">
        <div className="postdetail-top">
          <PostAuthor />
            <div className="postdetail-buttons">
              <Link to={'/posts/werwer/edit'} className='btn btn-sm btn-primary'>Edit</Link>
              <Link to={'/posts/werwer/delete'} className='btn btn-sm btn-danger'>Delete</Link>
          </div>
        </div>

        <h1>lorem ipsum</h1>
        <div className="postdetail-image">
          <img src={postDetailImage} alt=""/>
        </div>
        <div className="postDetail-para">
          <p>A blog is an informational website consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. In the 2000s, blogs were often the work of a single individual, occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and
             single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.</p>
        </div>
      </div>
    </section>
  )
}
