import React from 'react';
import {connect} from 'react-redux';
import VideoItem from './VideoItem';
import '../components/ListView.css'

class ListView extends React.Component{
    render() {
        console.log('list');
        console.log(this.props);

        return(
            <div id="list">
                <ul>
                    {this.props.videos['videos'].map((video) => {
                        return <VideoItem video={video} />
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps)(ListView);