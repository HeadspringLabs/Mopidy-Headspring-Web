var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var Test = require('./test.jsx');

var MainBar = React.createClass({
  render: function() {
  	var titleComponent = (<Test/>);
    return (
      <AppBar title={titleComponent} iconClassNameRight="fa fa-search fa-2x"/>
    );
  }
});
module.exports = MainBar;