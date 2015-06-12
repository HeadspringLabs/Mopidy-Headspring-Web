var React = require('react');
var mui = require('material-ui');

var QueueItem = React.createClass({
  render: function() {
    var styles = this.getStyles();
  	return (
      <div>
        <div style={styles.col1}>
        	<i className="fa fa-music fa-3x"></i>
        </div>
        <div style={styles.col2}>
          <h2> Song Title Here</h2>
          <h4>Artist name here</h4>
          <h4>Album name here</h4>
        </div>
      </div>
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
module.exports = QueueItem;