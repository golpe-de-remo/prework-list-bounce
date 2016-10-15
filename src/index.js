var React = require('react');
var ReactDOM = require('react-dom');
var SimpleButton = require('./components/SimpleButton');
var IntialList = require('./components/SimpleList');
var FinalList = require('./components/SimpleList');

window.jQuery = window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');

var developers = ["Juan", "Lluc", "Arslaan", "Pep"];

var App = React.createClass({
  propTypes: {
    initialOwners: React.PropTypes.array
  },
  getInitialState() {
    return {
      volunteers: this.props.initialOwners,
      selected: []
    };
  },
  handleRandomClick: function () {
    var randomPosition = Math.floor(Math.random() * this.state.volunteers.length);
    var newVolunteers = this.state.volunteers;
    var selectedVolunteer = newVolunteers.splice(randomPosition, 1);
    var allSelected = this.state.selected.concat(selectedVolunteer);
    console.log(allSelected);
    this.setState({
      volunteers: newVolunteers,
      selected: allSelected
    });
  },
  render: function () {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <SimpleButton onClick={this.handleRandomClick}>Randomize me!</SimpleButton>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <IntialList owners={this.state.volunteers}/>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <FinalList owners={this.state.selected}/>
          </div>
        </div>
      </div>
    );
  }
});

require('./index.css');

ReactDOM.render(
  <App initialOwners={developers}/>,
  document.getElementById('root')
);

window.$.material.init();
window.$.material.ripples();
