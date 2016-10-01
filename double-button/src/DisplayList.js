//mostrador de lista


var React = require('react');


var DisplayList = React.createClass({
	render: function () {
		return(
			<div className="bs-component">
			<ul>
				{
					this.props.elements.map(function(name, i) {
						return<li key={"name_"+i}><h2>{name}</h2></li>
  					})
				}
			</ul>
			</div>
		)
	}
});


module.exports = DisplayList
