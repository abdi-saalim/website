import logo from './logo.svg';
import './App.css';
import screenshot from './images/hello.jpg';

function App(){
  return(
    <div>
    <h1>Hello, world!</h1>
    <p>Welcome to my first React app.</p>
    <b>this is bold</b>
    <br></br>
    <i>woahhhhh</i>
    <ul>
      <li><b>Coding</b></li>
      <li><i>Music</i></li>
      <li>Coding</li>
    </ul>
    <h2>My Skills</h2>
    <ol>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>Python</li>
    </ol>
    <h3>YO THIS IS MY FAVORITE WEBSITE</h3>
    <a href = "https://www.youtube.com/watch?v=VegDvRLVlOI&ab_channel=BrianDesign">Visit Example Website</a>
    <div className= "App">
    <h1>
    <img 
       src ={screenshot}
       alt=""
       className="image"
       />
      </h1>
    </div>
    </div>
  );
}
export default App;
      