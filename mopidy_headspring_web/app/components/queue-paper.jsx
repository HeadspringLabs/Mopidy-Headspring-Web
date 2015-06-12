var React = require('react');
var mui = require('material-ui');
var { Paper } = mui;
var QueueList = require('./queue-list.jsx');

var QueuePaper = React.createClass({
  render: function() {
    var selectedIndex = this.props.selectedIndex;
    var styles = this.getStyles();
    var queueList = [1, 2, 3, 4]
    return (
       <div>
        <Paper
          ref="clickAwayableElement"
          zDepth={2}
          rounded={false}
          style={styles.root}>
            <QueueList
              ref="queueList"
              queue={queueList}
            />
        </Paper>
      </div>
    );
  },
  getStyles: function() {
    var styles = {
      root: {
        height: '100%',
        width: '25%',
        position: 'fixed',
        zIndex: 10,
        left: 8,
        top: 87,
        overflow: 'scroll',
      },
    };
    return styles;
  },
});
module.exports = QueuePaper;