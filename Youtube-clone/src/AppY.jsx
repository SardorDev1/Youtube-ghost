import React, { useState } from 'react'
import './App.css'
import URL from './API/URL';
import Search from './companent/search';
import Video from './companent/Video';
import ListVideo from './companent/ListVideo';
import ReactSwitch from 'react-switch';
import { auth } from 'firebase';


export const ThemeContext = React.createContext(null);
function AppY({user}) {
  const [theme, setTheme] = useState("light")
  const [videos, setVideos] = useState([]);

  const [selectedvideos, setSelectedVideos] = useState({ id: {}, snippet: {} });
  const ToogleTheme = () => {
    setTheme((mode) => (mode === "light" ? "dark" : "light"))
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
  
    setVideos(videos)
    setSelectedVideos(videos[0])
  }




  return (
    <ThemeContext.Provider value={{ theme, ToogleTheme }}>
      <>

        <div className="app" id={theme}>

          <div className="searchsection d-flex mt-2">
      <div className="mode">
      <ReactSwitch className='mode mt-4 ' onChange={ToogleTheme} checked={theme === "dark"} />
      </div>
            <Search onSubmit={videoSubmit} />

            <div className="account m-2">
<img  className='photo_user'  width={50} height={50} src={user.photoURL} alt="" />
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
