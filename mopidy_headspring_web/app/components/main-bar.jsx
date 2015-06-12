var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var Header = require('./header.jsx');

var MainBar = React.createClass({
  render: function() {
  	var titleComponent = (<Header/>);
    return (
      <AppBar title={titleComponent} iconClassNameRight="fa fa-search fa-2x"/>
    );
  }
});
module.exports = MainBar;