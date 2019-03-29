import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  if(props.tab === props.selectedTab) {
    return {className = 'tabs active-tab'}} else {
      return {className = 'tab'}
    }
  }
  return (
    <div
      className={''}
      onClick={props.selectTabHandler}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.object,
  selectedTab: PropTypes.object
}

export default Tab;
