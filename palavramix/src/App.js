import React, { Component } from 'react';
import './App.css';
import {
  convertIntToHexColor
} from "./utils/Color";

// todo: refactor all custom components to separate file for clarity

/**
 *  This class will contain all the state pertaining to the words available for phrase creation,
 *  as well as the list of phrases (posts) made by other users.
 *
 *  It will also hold the state for the phrase being created and updates the Phrasebox component in real time.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: [], // collection of phrase objects
      words: [],   // collection of strings
      userInputPhrase: [],  // collection of strings
      userInputPhraseString: '', // string made up of above collection
      color: 'black'   // color passed in by server
    };
  }

  render() {
    return (
      <div className="App">

        <div className="header-logo">
          <h1>palavramix</h1>
        </div>

        <CollectionOfPhrases/>

      </div>
    );
  }
}

/**
 * Displays all phrases in state in a large chunk of the screen, in order of reception.
 *
 * @param props
 */
const CollectionOfPhrases = (props) => {
  return (
    <div className="collection-of-phrases">
      <PhraseBox
          phrase={"This is a phrase"}
          timestamp={new Date(Date.UTC(2019, 11, 20, 3, 0, 0))}
          color={40}
      />
    </div>
  );
};

/**
 * Will contain phrase and color. Organizes it in a neat box that displays phrase.
 * This component can be also used when building a phrase, as well as displaying an existing phrase.
 *
 * @param props should include a phrase (string), timestamp (date), color (a number from 0-359)
 */
const PhraseBox = (props) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
  const dateString = props.timestamp.toLocaleString('en-US', options);
  const boxStyle = {
    backgroundColor: convertIntToHexColor(props.color)
  };

  return (
    <div className="phrase-box" style={boxStyle}>

      <div className="top-container">
        <p className="phrase">{props.phrase}</p>
      </div>

      <div className="bottom-container">
        <button className="upvote">+</button>
        <button className="downvote">-</button>
        <h2 className="timestamp">{dateString}</h2>
      </div>

    </div>
  );
};

/**
 * Area where words will be displayed, along with a mock post where the user will be able to add words to.
 */
const UserInput = (props) => {

  /* will organize this vertically into:
   *    -- phrasebox in construction
   *    -- post button
   *    -- word shelf + backspace
   *
   *
   *    todo: don't forget to put limitations on the number of words (or repeat) possible in the phrasebox
   */
  return (
      <div className="user-input">
          <PhraseBox
            phrase={this.state.userInputPhraseString}
            timestamp={new Date()}
            color={this.state.color}
          />

          <button className="submit-button">submit!</button>

          <div className="word-box-container">
              {this.state.words.map((val, index) => (
                  <WordBox
                      key={val+index}
                      word={val}
                  />
              ))}
          </div>
      </div>
  );
};

/**
 *  Styles word into a box of constant height.
 */
const WordBox = (props) => (
  <div className="word-box">
    <h3>{props.word}</h3>
  </div>
);

export default App;
