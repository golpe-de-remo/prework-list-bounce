// La aplicación

var React = require('react');
var ReactDOM = require('react-dom');
window.jQuery = window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');
var OurButton = require("./OurButton.js");
var DisplayList = require("./DisplayList.js");
var NameBox = require("./NameBox.js");




var namesOrigin = []
var namesDestiny = []




var App = React.createClass ({
	

	getInitialState: function() {
	    return {
	    	selectedName: "",
	    	namesDestiny: [],
	    	namesOrigin: []
	          
	    };
	},

	
	handleClickPush: function() {
		namesOrigin.push(prompt("Please, type the name of a participant."));
		var resultingListOfOrigin = namesOrigin
		var newOrigin = resultingListOfOrigin
		this.setState({namesOrigin: newOrigin});
		
	},

	handleClickSelect: function() {
		//var position = Math.floor(Math.random()*namesOrigin.length);
		var name = namesOrigin.splice(Math.floor(Math.random()*namesOrigin.length), 1);
		var newOrigin = namesOrigin;
		namesDestiny.push(name);
		var newDestiny = namesDestiny
		this.setState({selectedName: name});
		this.setState({namesOrigin: newOrigin});
		this.setState({namesDestiny: newDestiny})
		
		

	},

	render: function(){
			return (
				<div className="bs-component">
					<OurButton onClick={this.handleClickPush} />
					<DisplayList elements={this.state.namesOrigin}/>
					<OurButton onClick={this.handleClickSelect} />
					<NameBox name={this.state.selectedName} />
					<DisplayList elements={this.state.namesDestiny}/>	
				</div>
				
			);
		}

	
	


});

ReactDOM.render(
	<App />,
	document.getElementById("root")
);