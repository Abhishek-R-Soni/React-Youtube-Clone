import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';

class DetailView extends React.Component{
    
    render() {
        const opts = {
          height: '520',
          width: '850',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        console.log('Detail view');
        console.log(this.props)
        return <YouTube videoId={this.props.ID.ID} opts={opts} onReady={this._onReady} />;
      }
      
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

const mapStateToProps = (state) => {
  return{
      ID: state.ID
  }
}

export default connect(mapStateToProps)(DetailView);