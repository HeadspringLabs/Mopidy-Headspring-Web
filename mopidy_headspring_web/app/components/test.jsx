var React = require('react');
var mui = require('material-ui');
var Tabs = mui.Tabs;
var Tab = mui.Tab;

var Test = React.createClass({
  render: function() {
  	var styles = this.getStyles();
    return (
      <Tabs style={styles.inlineBlock}>
      	<Tab label='testing tabs in app bar'>
      		<span>Tab 1 content</span>
  		</Tab>
      	<Tab label='another test tab'>
      		<span>Tab 2 content goes here</span>
      	</Tab>
      </Tabs>
    );
  },
  getStyles() {
    return {
      inlineBlock: {
        display: 'inline-block'
      }
    };
  }
});
module.exports = Test;