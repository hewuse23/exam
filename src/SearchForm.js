/**
 * Created by Hew4803 on 6/7/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchForm extends Component{
    //store searchstring as state
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    handleChange=(event)=> {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.updateRepos(this.state.searchText);

    };

    render(){
        return (
            <div id="search">
                <hr />
                {(this.props.errorText.length>0)?
                    <div data-notification="" className="notification-box alert">
                        No results for that username
                    </div>
                    :null}
                <form className="row" onSubmit={this.handleSubmit}>
                    <label>Search repositories by username
                        <input className="row" type="text" placeholder="Username" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" className="row button" value="Search" disabled={this.state.searchText === ''}/>
                </form>
                <hr />
            </div>
        )
    }
}

SearchForm.propTypes={
    updateRepos: PropTypes.func.isRequired,
    errorText: PropTypes.string.isRequired
}

export default SearchForm;
