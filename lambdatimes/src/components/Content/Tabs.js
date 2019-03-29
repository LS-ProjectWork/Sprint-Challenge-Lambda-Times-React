import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab} />
        })}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.shape({
    tabData: PropTypes.string
  })
}

export default Tabs;
