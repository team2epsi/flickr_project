import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      keyWords: '',
    };
  }

  handleKeyWords(event) {
    this.setState({
      keyWords: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Mots clés"
          onChange={this.handleKeyWords.bind(this)}
          value={this.state.keyWords}
        ></input>
        {console.log(this.state.keyWords)}
      </div>
    );
  }
}

export default SearchBar;
