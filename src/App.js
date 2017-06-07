import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RepoList from './RepoList'
import RepoDetails from './RepoDetails'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="col small-16">Github viewer</h1>
        <button className="col small-3">Home</button>
        <hr />
        <SearchForm />
        <RepoList />
        <RepoDetails />
      </div>
    );
  }
}

export default App;
