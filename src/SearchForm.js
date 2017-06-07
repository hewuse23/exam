/**
 * Created by Hew4803 on 6/7/17.
 */

import React, { Component } from 'react';


class SearchForm extends Component{
    //store searchstring as state

    render(){
        return (
            <div id="search">
                <hr />
                <div data-notification="" className="notification-box alert">
                    Notification if problem will appear hear
                    <a href="#" className="close">&#xD7;</a>
                </div>
                <form className="row">
                    <label>Search repositories by username
                        <input className="row" type="text" placeholder="Username"/>
                    </label>
                    <input type="submit" className="row button" value="Search"/>
                </form>
                <hr />
            </div>
        )
    }
}

export default SearchForm;
