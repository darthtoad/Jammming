import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}

	handleTermChange(event) {
		this.setState({ term: event.target.value })
	}

	search(term) {
		this.props.search(this.state.term);
	}

	render() {
		return (
			<div className="SearchBar">
			  <input placeholder="Enter A Song, Album, or Artist" />
			  <a>SEARCH</a>
			</div>
			)
	}
}

export default SearchBar;