/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';
import React from 'react';
import PropTypes from 'prop-types';


const RepoDetails=(props)=>{
    //display only - no state
    console.log('details');
    console.log(props);

    return(
        <div id="repoList" className="row text-center">
            <h3>{props.repoDetails.name} details</h3>

            <table className="table repoDetailTable">

                <thead>
                    <tr>
                        <th>Stars</th>
                        <th>Forks</th>
                        <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.repoDetails.stargazers_count}</td>
                        <td>{props.repoDetails.forks}</td>
                        <td>{props.repoDetails.language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

RepoDetails.propTypes={
    repoDetails: PropTypes.object.isRequired
};
export default RepoDetails;