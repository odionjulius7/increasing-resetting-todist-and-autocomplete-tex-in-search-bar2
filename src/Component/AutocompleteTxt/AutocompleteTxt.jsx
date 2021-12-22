import React, { Component } from "react";
import "./AutocompleteTxt.css";

export class AutocompleteTxt extends Component {
  //   items = ["james", "David", "dove", "mike", "victor"];
  state = {
    suggestions: [],
    text: "",
  };

  handleChange = (e) => {
    const { items } = this.props;
    //   get the value
    const { value } = e.target;
    // pass an empty array suggestions
    let suggestions = [];
    if (value.length > 0) {
      // if the value inside input box is greater than 0
      const regex = new RegExp(`^${value}`, "i"); // the value allow to be inputed
      //   then sort alphabetically each item that pass/have the alphabetical order item
      // each item that matches the value inputted should be return to the suggestions array
      suggestions = items.sort().filter((item) => regex.test(item));
    }
    this.setState({ suggestions, text: value });
    // the text is use to select the inputed suggest as a controlled form
  };

  suggestionSelected = (value) => {
    this.setState({
      text: value,
      suggestions: [],
    });
  };

  displaySuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestions.map((item) => (
            <li onClick={() => this.suggestionSelected(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  };

  render() {
    return (
      <div style={{ justifySelf: "center" }}>
        <input
          style={{ width: "20rem", outline: "none" }}
          value={this.state.text}
          type="text"
          onChange={this.handleChange}
        />
        {this.displaySuggestions()}
      </div>
    );
  }
}

export default AutocompleteTxt;
