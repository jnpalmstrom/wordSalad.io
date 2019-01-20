import React, { Component } from 'react';
import './App.css';
import {
    convertIntToHexColor
} from "./utils/Color";

import openSocket from 'socket.io-client';

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
            color: 0   // color passed in by server
        };

        this.onWordClick = this.onWordClick.bind(this);
        this.onBackspace = this.onBackspace.bind(this);
    }

    /**
     * Updates state by adding a word
     */
    onWordClick(word) {
        this.setState((oldState, props) => (
            {
                userInputPhrase: [...oldState.userInputPhrase, word],
                userInputPhraseString: [...oldState.userInputPhrase, word].join(" ")
            }
        ))
    }

    onBackspace() {
        let updated = [...this.state.userInputPhrase];
        updated.pop();

        this.setState((oldState, props) => (
            {
                userInputPhrase: updated,
                userInputPhraseString: updated.join(" ")
            }
        ))
    }

    componentDidMount() {
        // create connection
        const socket = openSocket('http://localhost:3000');

        // bind event listeners
    }

    /*  User Input div will organize this vertically into:
     *    -- phrasebox in construction
     *    -- post button
     *    -- word shelf + backspace
     *
     *
     *    todo: don't forget to put limitations on the number of words (or repeat) possible in the phrasebox
     */
    render() {
        return (
            <div className="App">

                <div className="header-logo">
                    <h1>palavramix</h1>
                </div>

                <CollectionOfPhrases phrases={this.state.phrases}/>

                <div className="user-input">
                    <div className="user-input-container">
                        <div className="input-phrasebox">
                            <PhraseBox
                                phrase={this.state.userInputPhraseString}
                                timestamp={new Date()}
                                color={this.state.color}
                            />
                        </div>

                        <button className="submit-button">submit!</button>

                        <div className="word-box-container">
                            {this.state.words.map((val, index) => (
                                <WordBox
                                    key={val+index}
                                    word={val}
                                    onWordClick={this.onWordClick}
                                />
                            ))}
                            <WordBox id="backspace-key" word={"<<"} onWordClick={this.onBackspace}/>
                        </div>
                    </div>
                </div>

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
            {props.phrases.map((item, index) => (
                <PhraseBox
                    key={item.timestamp.toString() + index}
                    phrase={item.phrase}
                    timestamp={item.timestamp}
                    color={item.color}
                />
                ))}
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
                <div className="vote-buttons">
                    <button className="vote-btn">+</button>
                    <button className="vote-btn">-</button>
                </div>
                <h2 className="timestamp">{dateString}</h2>
            </div>

        </div>
    );
};


/**
 *  Styles word into a box of constant height.
 */
const WordBox = (props) => (
    <h3 className="word" id={props.id} onClick={(e) => props.onWordClick(props.word)}>
        {props.word}
    </h3>
);

export default App;
