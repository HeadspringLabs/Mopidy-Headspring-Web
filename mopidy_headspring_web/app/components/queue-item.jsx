var React = require('react');
var mui = require('material-ui');

var QueueItem = React.createClass({
  render: function() {
  	return (
      <div>
      	<i class="fa fa-music"></i>
        <h2>Song Title Here</h2>
        <h4>Artist name here</h4>
        <h4>Album name here</h4>
      </div>
    );
  },
});
module.exports = QueueItem;