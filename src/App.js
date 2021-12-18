import './App.css';
import Video from './components/Video/Video';

const App = () => {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/93c5e90642b46d82389c5ca1ca4fd892/61be0b87/video/tos/alisg/tos-alisg-pve-0037c001/2afa82a607424aea8fbbd0f1ff8cec8a/?a=1988&br=4352&bt=2176&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FO6kag3-I&l=2021121810252901018905301622990494&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M253dzo6Zm5sNzMzODczNEApPDw3Z2Q6NWQ8NzpmZWg3N2dqYGZocjRvNGJgLS1kMS1zczFiXzItNGBhLmFjYV5gNC86Yw%3D%3D&vl=&vr="
          channel="quavious"
          description="chorus god"
          song="post malone - congratulations (ft. quavo)"
          likes={999}
          messages={300}
          shares={200}
        />
      </div>
    </div>
  );
}

export default App;
