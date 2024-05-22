import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // let [cnt, setCnt] = useState(0);
  // let ThumbClick = () => {
  //   setCnt(cnt + 1);
  // };

  const [posts, setPosts] = useState([]);
  const [sound, setSound] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(response => setPosts(response.data))

    axios.get('http://localhost:3100/sound/dog')
         .then(response => setSound(response.data.sound))
  },[]);

  return (
    <div>
      {/* <span onClick={ThumbClick} Style={"cursor:pointer"}>👍</span><span>{cnt}</span>     */}

      <label>{sound}</label>

      <ul>
        {/*화살표 함수에서 {return} or ({})*/
          posts.map(post => (
            <li key={post.id}>
                <div>{post.title}</div>
                <div><img src={post.thumbnailUrl}/></div>
            </li>
          ))  
        }
      </ul>  

    </div>
  );
}

export default App
