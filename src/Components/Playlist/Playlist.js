import React from 'react';
import Tracklist from '../Tracklist/Tracklist.js';
import './Playlist.css';

class Playlist extends React.Component {

	constructor(props) {

		super(props);
		this.onNameChange=this.onNameChange.bind(this);

	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value);
	}

	render() {
		return (
			<div className="Playlist">
				<input onChange={this.handleNameChange} defaultValue={this.props.playlistName} />
				<Tacklist tracks={this.props.playlistTracks} />
			    <!-- You will add a map method that renders a set of Track components  -->
			    <a onClick={this.props.onSave} className="save-playlist">SAVE TO SPOTIFY</a>
			</div>
			)
	}
}

export default Playlist;