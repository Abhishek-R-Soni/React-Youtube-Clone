import React from 'react';
import {connect} from 'react-redux';
import {createVideos} from '../actions/index';
import '../components/SearchBar.css';

const API_KEY = 'AIzaSyClNroBD2ZRyIAJEzMDu70u4qZQZnduYuk';
const baseURL = "https://www.googleapis.com/youtube/v3"; 

class SearchBar extends React.Component{
    state = {
        query : 'react'
    };

    chnageHandle = (e) => {
        this.setState({'query':e.target.value})
    };

    handleSubmit = async e => {
        e.preventDefault();
        let query = e.target.value;
        
        const response = await fetch(baseURL+'/search?&key='+API_KEY+'&q='+this.state.query+'&part=snippet',{headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
          .then((response) => response.json());

        console.log('Response : ');
        console.log(response);
        this.props.dispatch(createVideos(response.items));

        // console.log(this.props.videos);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="searchText" type="text" name="search" onChange={this.chnageHandle} required/>
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