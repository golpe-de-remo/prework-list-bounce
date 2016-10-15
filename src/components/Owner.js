var React = require("react");

var Owner = React.createClass({
  propTypes: {
    owner: React.PropTypes.string
  },
  render: function () {
    return (
      <div onClick={this.handleClick} className="panel panel-default">
        <div className="panel-body"><h3>{this.props.owner}</h3></div>
      </div>
    );
  }
});

module.exports = Owner;
