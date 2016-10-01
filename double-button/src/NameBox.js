//Nombre seleccionado en su cajita

var React = require('react');



var NameBox = React.createClass({
	render: function() {
		return <form><legend>Lista</legend><textarea value={this.props.name}></textarea></form>
	}
});


module.exports = NameBox