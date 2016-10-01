//mostrador de lista


var React = require('react');


var DisplayList = React.createClass({
	render: function () {
		return(
			<ul>
				{
					this.props.elements.map(function(name, i) {
						return<li key={"name_"+i}>{name}</li>
  					})
				}
			</ul>
		)
	}
});


module.exports = DisplayList
