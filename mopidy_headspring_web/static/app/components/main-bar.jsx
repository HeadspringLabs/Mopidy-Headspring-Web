var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;

var MainBar = React.createClass({
  render: function() {
    return (
      <AppBar title='Jukebox' iconClassNameRight="fa fa-search fa-2x"/>
    );
  }
  
});

module.exports = MainBar;