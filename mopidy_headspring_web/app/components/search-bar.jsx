var React = require('react');

var SearchBar = React.createClass({
  render: function() {
    var styles = this.getStyles();
  	return (
      <span>
        <input type="text" />
        <i className="fa fa-search"></i>
      </span>
    );
  },
  getStyles: function() {
    var styles = {
      col1: {
        display: 'inline-block',
        width: '25%',
      },
      col2: {
        display: 'inline-block',
        width: '75%',
      },
    };
    return styles;
  },
});
module.exports = SearchBar;