var React = require('react');
var mui = require('material-ui');
var { LeftNav } = mui;
var QueueItem = require('./queue-item.jsx');

var QueueList = React.createClass({
  render: function() {
  	var queueItems = this.props.queue.map(function (item) {
  		return (
  			<QueueItem/>
  			);
  	});
    return (
      <div>
      	{queueItems}
      </div>
    );
  },
});
module.exports = QueueList;