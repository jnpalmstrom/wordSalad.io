import React, { Component } from 'react';
import './App.css';
import {
    convertIntToHSL
} from "./utils/Color";

import io from 'socket.io-client';

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
            color: 0,   // color passed in by server
            socket: '',
            timeLeft: -1,
            errorMsg: ''
        };

        this.onWordClick = this.onWordClick.bind(this);
        this.onBackspace = this.onBackspace.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Updates state by adding a word
     */
    onWordClick(word) {

        if (this.state.userInputPhrase.length < 12)
        {
            this.setState((oldState, props) => (
                {
                    userInputPhrase: [...oldState.userInputPhrase, word],
                    userInputPhraseString: [...oldState.userInputPhrase, word].join(" ")
                }
            ))
        }
        else
            this.setState({errorMsg: "(word limit reached!)"})
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

    // todo: add an error text
    onSubmit(input) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
        const dateString = input.timestamp.toLocaleString('en-US', options);

        if (input.phrase.length > 3)
        {
            this.state.socket.emit('post', {
                phrase: input.phrase,
                timestamp: dateString,
                color: input.color
            });
                this.setState({
                userInputPhrase: [],
                userInputPhraseString: ''
            });

            this.setState({errorMsg: ""})
        }
        else
            this.setState({errorMsg: "(Too short!)"})
    }

    componentDidMount() {
        // create connection
        const socket = io();
        this.setState({socket: socket});

        socket.on('current-color', (currColor) => {
            this.setState({ color: currColor });
        });

        socket.on('all-words', (wordArray) => {
           this.setState({ words: [...wordArray] });
        });

        socket.on('a-post', (post) => {
            this.setState((oldState, props) => ({phrases: [...oldState.phrases, post]}));
        });

        socket.on('all-posts-cleared', () => {
            this.setState({phrases: []});
        });

        socket.on('timer-update', (time) => (
           this.setState({timeLeft: time})
        ));

        // todo: deal with 'warning' event --> maybe not
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
        let colorValue = convertIntToHSL(this.state.color, this.state.userInputPhraseString.length);

        return (
            <div className="App">

                <div className="header-logo">
                    <h1>{this.state.timeLeft} seconds till palavramix</h1>
                </div>

                <CollectionOfPhrases phrases={this.state.phrases}/>

                <div className="user-input">
                    <div className="user-input-container">
                        <div className="input-phrasebox">
                            <PhraseBox
                                phrase={this.state.userInputPhraseString}
                                timestamp={new Date()}
                                color={colorValue}
                            />
                        </div>

                        <button className="submit-button" onClick={(e) => (this.onSubmit({
                            phrase: this.state.userInputPhraseString,
                            timestamp: new Date(),
                            color: colorValue
                        })) }>
                            submit! {this.state.errorMsg}
                        </button>

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
                    id={item.id}
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
        backgroundColor: props.color
    };

    return (
        <div className="phrase-box" style={boxStyle}>

            <div className="top-container">
                <p className="phrase">{props.phrase}</p>
            </div>

            <div className="bottom-container">
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
