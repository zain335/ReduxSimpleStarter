import { every } from "lodash";
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          onKeyDown={(event) => this.handleSearch(event)}
        />
      </div>
    );
  }

  handleSearch(event) {
    if (event.key === "Enter") {
      this.props.onSearch(this.state.term);
    }
  }

  onInputChange(term) {
    this.setState({ term });
  }
}

export default SearchBar;
