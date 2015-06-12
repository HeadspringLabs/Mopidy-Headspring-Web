var React = require('react');
var mui = require('material-ui');
var { FlatButton } = mui;
var SearchBar = require('./search-bar.jsx');

var Header = React.createClass({
  render: function() {
  	var styles = this.getStyles();
    return (
      <span>
        <img src="images/Headspring-logo-2c-PMS-LG.png" style={styles.hsLogo} />
        <SearchBar/>
        <FlatButton label="Now Playing"/>
      </span>
    );
  },
  getStyles() {
    return {
      hsLogo: {
        width: '22%',
      },
      inlineBlock: {
        display: 'inline-block'
      }
    };
  }
});
module.exports = Header;