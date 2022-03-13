import React, { useEffect, useState } from 'react';
import './css/feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((s) => {setPosts(s.docs.map( (doc) => ( {id : doc.id , data: doc.data() } ) ))})
 
  }, []);

  return (
    <div className="feed">
      <MessageSender />
      <hr className='hr'/>
      {posts.length < 1 ? <h3  style={{margin: "10px"}}>No Posts Loadded</h3> : posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          image={post.data.image}
          message={post.data.message}
        />
      ))}

    </div>
  );
}

export default Feed;
