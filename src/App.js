import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RepoList from './RepoList'
import RepoDetails from './RepoDetails'
import { getReposForUser } from './apiHelper'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            repos:[],
            selectedRepo:{},
            errorText: ''
        }
    }

    updateSelectedRepo=(repo)=>{
        console.log('repo selected')
        console.log(repo)
        this.setState({
            selectedRepo: repo
        })

    }

    updateRepos=(userName)=>{
        getReposForUser(userName)
            .then((repos) => {
                console.log('repos')
                console.log(repos)
                if(!Array.isArray(repos)){
                    this.setState({
                        errorText: "Invalid username",
                        repos: [],
                        selectedRepo:{}
                    })
                }else{
                    this.setState({
                        repos: repos,
                        errorText: '',
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    };

    // very close to having the routes done here.
    //<SearchForm updateRepos={this.updateRepos} errorText={this.state.errorText}/>
//{(this.state.repos.length>1)? <RepoList repos={this.state.repos} updateSelectedRepo={this.updateSelectedRepo}/>:null}
    render() {
      return (
          <Router>
              <div className="App">
                  <h1 className="col small-16">Github viewer</h1>
                  <Link to="/"><button className="col small-3">Home</button></Link>
                    <hr />
                    <Route exact path="/" render={(props)=>{
                        return (
                            <SearchForm updateRepos={this.updateRepos} errorText={this.state.errorText}/>
                        )
                    }
                    } />
                  <Route exact path="/" render={(props)=> {
                      if (this.state.repos.length > 1) {
                          return <RepoList repos={this.state.repos} updateSelectedRepo={this.updateSelectedRepo}/>
                      } else {
                          return null
                      }
                  }} />

                    {(this.state.selectedRepo.id)?
                      <Route path='/repos/:id' render={(props)=> {
                          console.log('hit route')
                          console.log(props)
                          return <RepoDetails repoDetails={this.state.selectedRepo} {...props} />
                          }
                      }/>
                    :null}
              </div>
          </Router>
      );
    }
}

export default App;
