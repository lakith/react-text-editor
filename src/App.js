import React, { Component } from 'react';
import './App.css';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class App extends Component {

  state = {
    content: 'content',
  }

  updateContent = (value) => {
    this.setState({content:value})
  }

  jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
  }
  

  render() {
    console.log(this.state.content)
    return (
      <div style={{width:500, marginLeft:50,marginTop:50}}>
        <JoditEditor
            	editorRef={this.setRef}
                value={this.state.content}
                config={this.config}
                onChange={this.updateContent}
          />
      </div>
    );
  }
}

export default App;
