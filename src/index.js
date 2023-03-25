import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VieosList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBywEjznfbzxr8yTQL4UUXOeW355ugSvNE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedVideo: null, videos: [] };

    this.videoSearch("searchTerm");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ selectedVideo: videos[0], videos: videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={(term) => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VieosList
          onVideoSelect={(video) => {
            this.setState({ selectedVideo: video });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// put comonent to the page (int he DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
