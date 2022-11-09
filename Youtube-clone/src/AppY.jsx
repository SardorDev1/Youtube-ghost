import React, { useState } from 'react'
import './App.css'
import URL from './API/URL';
import Search from './companent/search';
import Video from './companent/Video';
import ListVideo from './companent/ListVideo';
import ReactSwitch from 'react-switch';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { auth } from 'firebase';


export const ThemeContext = React.createContext(null);
export const SignOut = React.createContext(null);
function AppY({user}) {
  const [theme, setTheme] = useState("light")
  const [videos, setVideos] = useState([]);
const [out , setOut] = useState("notout btn pt-3 btn-danger text-center mx-4")
  const [selectedvideos, setSelectedVideos] = useState({ id: {}, snippet: {} });
  const ToogleTheme = () => {
    setTheme((mode) => (mode === "light" ? "dark" : "light"))
  }
 
  const Outs = () => {
    setOut((mode) => (mode === "notout  btn pt-3 btn-danger text-center mx-4" ? "out  btn pt-3 btn-danger text-center mx-4": "notout  btn pt-3 btn-danger text-center mx-4"))
  }
  async function videoSubmit(searchTerm) {
    const { data: { items: videos } } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: "AIzaSyAHMILATEUPOtyek4UVl_ZWwMD_qKzmU7A",
        q: searchTerm

      }


    });
  console.log(videos);
    setVideos(videos)
    setSelectedVideos(videos[0])
  }




  return (
    <ThemeContext.Provider value={{ theme, ToogleTheme }}>
      <>

        <div className="app px-3" id={theme}>

          <div className="searchsection d-flex mt-2">
      <div className="mode">
      <ReactSwitch className='mode mt-4 ' onChange={ToogleTheme} checked={theme === "dark"} />
      </div>
            <Search onSubmit={videoSubmit} />

            <div className="account d-flex m-2">
            <button  className={out} onClick={() => auth().signOut()} >SignOut</button>
       
<img onClick={() => Outs()}  className='photo_user '  width={50} height={50} src={user.photoURL} alt="" />


            </div>
          </div>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-6">
                <div className="current_video mb-5">
                  <Video video={selectedvideos} />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="video_list">
                  <div className="list_videos">
                    <ListVideo className="currentvideos" videos={videos} onSelectedVideo={setSelectedVideos} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



      </>
    </ThemeContext.Provider>
  )
}

export default AppY
