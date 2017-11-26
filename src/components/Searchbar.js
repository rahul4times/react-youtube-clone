import React, {Component} from 'react';

class Searchbar extends Component {

  state = {
    term:''
  }

  // onInputChange = (e) => {
  //   this.setState({term: e.target.value});
  // }
  // Following will do same but just shorthand
  //<input onChange={(e)=>console.log(e.target.value)} />
  //<input onChange={ e => console.log(e.target.value)} />

  render(){
    return(

      <div>
        <h3>Search Video</h3>
        <input
          value={this.state.term}
          onChange={(e)=>this.setState({term: e.target.value})}/>
        <br></br>
        <br></br>
        text: {this.state.term}
      </div>


    );
  }
}

export default Searchbar;
