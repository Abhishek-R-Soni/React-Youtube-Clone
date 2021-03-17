import React from 'react';
import {connect} from 'react-redux';
import {createVideos} from '../actions/index';
import '../components/SearchBar.css';

class SearchBar extends React.Component{
    state = {
        query : ''
    };

    chnageHandle = (e) => {
        this.setState({'query':e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log('Query : ' + this.state.query)
        this.props.dispatch(createVideos(this.state.query));
        this.setState({'query': ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="searchText" type="text" name="search" onChange={this.chnageHandle} value={this.state.query} required/>
                    <button className="searchButton" onClick={this.handleSubmit} name="Search">Search</button>
                </form>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        videos: state.videos
    };
}

export default connect(mapStateToProps)(SearchBar);