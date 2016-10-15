var React = require('react');
var Owner = require('./Owner');
require('./SimpleList.css');

var SimpleList = React.createClass({
  propTypes: {
    owners: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div className="">
        {
          this.props.owners.map(function (owner, index) {
            return (
              <Owner owner={owner} key={"owner_" + index}/>
            );
          }, this)
        }
      </div>
    );
  }
});

module.exports = SimpleList;
