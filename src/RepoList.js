/**
 * Created by Hew4803 on 6/7/17.
 */
'use strict';
import React, { Component } from 'react';


class RepoList extends Component{
    //store filter as state

    render(){
        return(
            <div id="repoList" className="row text-center">
                <h3>"UserNames" repositories</h3>
                <label>Filter repos by primary language</label>
                <select>
                    <option value="all">All</option>
                    <option value="javascript">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="ruby">Ruby</option>
                </select>
                <table className="table actionable">
                    <tr className="actionable">
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td>Repo 1</td>
                    </tr>
                    <tr>
                        <td>Repo 2</td>
                    </tr>
                    <tr>
                        <td>Repo 3</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default RepoList;