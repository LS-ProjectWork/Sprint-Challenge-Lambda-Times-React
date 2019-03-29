import React from 'react';

const Tab = props => {
  return (
    <div
      className={(props.tab === props.selectedTab) ? 'tab active-tab' : 'tab' }
      onClick={tab => {props.tab.selectTabHandler()
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
