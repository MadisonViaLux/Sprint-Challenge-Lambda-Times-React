import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  console.log(props)

    // if (props.tab === props.selectedTab) {
    //   props.tab.classList.add('tab active-tab')
    // } else {
    //   props.tab.classList.add('tab')
    // }

function selectTabHandler(props){
  if(props.tab === props.selectedTab){
    props.className='tab active-tab'
  } else{
    props.className='tab'
  }
}


  return (
    <div
      className={''}
      onClick={() => ( selectTabHandler()
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         )}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
