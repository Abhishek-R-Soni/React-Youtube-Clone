import React from 'react';
import {connect} from 'react-redux';
import {getVideoID} from '../actions/index';
import '../components/VideoItem.css';

class VideoItem extends React.Component{

    handleClick = (videoId) => {
        console.log('Video ID : ' + videoId);
        // <DetailView videoID={videoId}/>
        this.props.dispatch(getVideoID(videoId));
    }
    render(){
        return(
            <div className="video-detail" onClick={e => this.handleClick(this.props.video.id.videoId)}>
                <img className="img" src={this.props.video.snippet.thumbnails.default.url} alt=""></img><br />
                <small>Title : {this.props.video.snippet.title}</small><br />
                <small>Channel : {this.props.video.snippet.channelTitle}</small>
           </div>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        ID: state.ID
    }
}

export default connect(mapStateToProps)(VideoItem);