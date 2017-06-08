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
            errorText: '',
            currentUser: '',
            isLoading: false
        }
    }

    updateSelectedRepo=(repo)=>{
        this.setState({
            selectedRepo: repo
        })

    }

    updateRepos=(userName)=>{

        this.setState({
            isLoading:true
        })

        getReposForUser(userName)
            .then((repos) => {
                if(!Array.isArray(repos)){
                    this.setState({
                        errorText: "Invalid username",
                        repos: [],
                        currentUser: '',
                        selectedRepo:{},
                        isLoading: false
                    })
                }else{
                    this.setState({
                        repos: repos,
                        currentUser: userName,
                        errorText: '',
                        isLoading: false

                    })
                }
            })
            .catch((err)=>{
                console.log(err)
                this.setState({
                    errorText: "Invalid username",
                    repos: [],
                    currentUser: '',
                    selectedRepo:{},
                    isLoading: false
                })
            })
    };

    render() {
      return (
          <Router>
              <div className="App">
                  <h1 className="col small-16">Github Viewer</h1>

                  {((this.state.selectedRepo.id) ?<Link to="/"><button onClick={(e)=>{this.setState({selectedRepo:''})}} className="col small-3">Home</button></Link>:null)}
                    <hr />
                      <Route exact path="/" render={(props)=>{
                            return (
                                <SearchForm updateRepos={this.updateRepos} errorText={this.state.errorText}/>
                            )
                        }
                    } />
                  {(this.state.isLoading)?
                        <div id="loader"><span className="loading-indicator row"></span></div>
                      :null}
                  <Route exact path="/" render={(props)=> {
                      if (this.state.repos.length > 1) {
                          return <RepoList currentUser={this.state.currentUser} repos={this.state.repos} updateSelectedRepo={this.updateSelectedRepo}/>
                      } else {
                          return null
                      }
                  }} />

                  {(this.state.selectedRepo.id)?
                      <Route path='/repos/:id' render={(props)=> {
                          return <RepoDetails repoDetails={this.state.selectedRepo} {...props} />
                          }}/>
                      :null}
              </div>
          </Router>
      );
    }
}

export default App;
