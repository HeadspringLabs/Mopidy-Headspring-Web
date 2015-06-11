/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var MainBar = require('./main-bar.jsx');

var Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentWillMount: function() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
  },
  render: function() {
    return (
      <MainBar/>
    );
  },
});
module.exports = Main;