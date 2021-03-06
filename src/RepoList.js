/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class RepoList extends Component{
    //store filter as state
    constructor(props){
        super(props);
        this.state = {
            filter: 'all'
        }

    }

    handleFilter=(event)=>{
        this.setState({filter:event.target.value})
    }

    filterBuilder(arr){
        const results = arr.reduce((accum,repoObj)=>{
            let language = repoObj.language;
            accum[language]=true;
            return accum;
        },{});

        const filterOptionsArr = (
            (Object.keys(results)).map((language, ind)=>{
                return(
                <option key={ind} value={language}>{language}</option>)
            })
        )
        return filterOptionsArr;
    }

    reposTableRows = ()=>{

        return (this.props.repos.map((repo)=> {
            if (repo.language === this.state.filter || this.state.filter === 'all') {
                return (
                    <tr key={repo.id}>
                        <td key={repo.id}><Link onClick={() => this.props.updateSelectedRepo(repo)}
                                                to={`/repos/${repo.id}`}>{repo.name}</Link></td>
                    </tr>
                )
            }
        }))

    }

    render(){
        return(
            <div id="repoList" className="row text-center">
                <h3>{this.props.currentUser} repositories</h3>
                <label>Filter repos by primary language</label>
                <select onChange={this.handleFilter} defaultValue="all">
                    <option value="all">All</option>
                    {this.filterBuilder(this.props.repos)}
                </select>
                <table className="table actionable">
                    <thead>
                        <tr className="actionable">
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.reposTableRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

RepoList.propTypes={
    updateSelectedRepo: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired
    //purposely left off repos as it may be mulitple types.
}

export default RepoList;