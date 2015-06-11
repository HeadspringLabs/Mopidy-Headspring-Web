var React = require('react');
var mui = require('material-ui');
var { Paper } = mui;

var Queue = React.createClass({
  render: function() {
    return (
      <Paper zDepth={1}>
  	    <p>zDepth=1</p>
	  </Paper>
    );
  },
});
module.exports = Queue;