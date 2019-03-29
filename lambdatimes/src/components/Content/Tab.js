import React from 'react';
import PropTypes from 'prop-types'

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

Tab.propTypes = {
  tab: PropTypes.object,
  selectedTab: PropTypes.object
}

export default Tab;
