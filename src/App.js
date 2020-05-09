import React, { Component } from 'react';
import './App.css';

import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import SearchBarContainer from "./containers/SearchBarContainers/SearchBarContainer";

class App extends Component {

  render() {

    return (
      <div className="App">
        <SectionWrapper>
          <SearchBarContainer suggestions={true}/>
        </SectionWrapper>
      </div>
    );
  }
}

export default App;
