import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import ListView from './components/ListView';
import {connect} from 'react-redux';
import DetailView from './components/DetailView';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="head">
            <h1>YouTube Clone</h1>
            <div className="search-bar">
              <SearchBar />
            </div>
          </div>
          <div className="App-content">
            <div className="selected_video">
              {this.props.ID ? <DetailView /> : 'Select any video !!!'}
            </div>
            <div className="video_list">
              {this.props.videos['loading'] ? <ListView /> : 'Search something !!!'}
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
