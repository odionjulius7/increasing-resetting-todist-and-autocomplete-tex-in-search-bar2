import React, { Component } from "react";
import AutocompleteTxt from "./Component/AutocompleteTxt/AutocompleteTxt";
import Counters from "./Component/Counters";
import Header from "./Component/Header";
import countries from "./countries";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIcrease = (counter) => {
    // It is not right to update a state object values directly like this
    // const increasedCounter = this.state.counters.map((c) => {
    //   if (c.id === id) {
    //     c.value++;
    //   }
    //   return c;
    // });
    // this.setState({
    //   counters: increasedCounter,
    // });
    // BUT like this one down here
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // after getting the index position of the item
    // we now pass d clone of that item to our already cloned item list
    // for that individual position before making changes
    counters[index] = { ...counter };
    counters[index].value++;
    // this will return all the value(spread operator)copied and that particular 1 updated as well
    this.setState({ counters });
    console.log(counters);
    console.log(this.state.counters);
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => {
      // note: if you are returning a comparison you do it like this
      // or the one without the curly braces
      return c.id !== id;
    });
    this.setState({ counters });
    console.log(id);
  };

  resetCounter = () => {
    const counters = this.state.counters.map((c) => {
      // note: if you are returning an assignment/expression you do it like this
      // e get why!
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log(countries);
    const { counters } = this.state;
    return (
      <React.Fragment>
        <Header counters={counters} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5rem",
          }}
        >
          <Counters
            counters={counters}
            handleIcrease={this.handleIcrease}
            handleDelete={this.handleDelete}
            resetCounter={this.resetCounter}
          />

          <AutocompleteTxt items={countries} />
        </div>
      </React.Fragment>
    );
  }
}
