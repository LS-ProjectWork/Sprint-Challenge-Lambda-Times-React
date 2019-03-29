import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => {
          return (
            <div>
              <Tab key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
            </div>
          )
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
