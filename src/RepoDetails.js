/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';
import React from 'react';

const RepoDetails=()=>{
    //display only - no state
    return(
        <div id="repoList" className="row text-center">
            <h3>"RepoName" details</h3>

            <table className="table repoDetailTable">
                <tr>
                    <th>Stars</th>
                    <th>Forks</th>
                    <th>Primary Language</th>
                </tr>
                <tr>
                    <td>32</td>
                    <td>6</td>
                    <td>JavaScript</td>
                </tr>

            </table>
        </div>
    )
};
export default RepoDetails;