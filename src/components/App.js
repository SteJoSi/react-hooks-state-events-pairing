import React from "react";
import video from "../data/video.js";
import Link from "./Link";
// import Buttons from "./Buttons"

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Link videoInfo={video} />
    </div>
  );
}

export default App;


// App
//  |_Link.js
//    |_Comments.js
//  |_Buttons.js