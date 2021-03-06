import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getData } from "../actions";

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h1>Just wait a sec, i'm still getting the data</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getData
    /* action creators go here */
  }
)(CharacterListView);
