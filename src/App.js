import React, { Component } from 'react';
import Container from './components/Container';
import YTSearch from 'youtube-api-search';

const API_KEY = '';

YTSearch({key: API_KEY, term: 'arizona'}, function(result){
  console.log('Result: ', result);
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
