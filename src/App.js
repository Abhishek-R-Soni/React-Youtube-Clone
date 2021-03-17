import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import {connect} from 'react-redux';
import DetailView from './components/DetailView';
import {Helmet} from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Helmet>
                <meta charSet="utf-8" />
                <title> YouTube Clone </title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
        <header className="App-header">
          <div className="head">
            <h1>YouTube Clone</h1>
            <div className="search-bar">
              <SearchBar />
            </div>
          </div>
          <div className="App-content">
            <div className="selected_video">
              {this.props.ID ? <DetailView /> : 'Select any video from List !'}
            </div>
            <div className="video_list">
              {this.props.videos['loading'] ? <ListView /> : 'Search something !'}
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    videos: state.videos,
    ID: state.ID
  } 
}

export default connect(mapStateToProps)(App);
