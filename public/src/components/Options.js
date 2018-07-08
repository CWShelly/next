import React from 'react';
 import Option from './Option';

const Options = (props) => (
  <div>
  <div className="widget-header">
  <h3 className="widget-header__title" > Options</h3>

  <h3 className="widget-header__title x" >{props.options.length} possibilities </h3>

  </div>



  {props.options.length ===0 &&<p className="widget__message">please add an option</p>}

    {
    props.options.map((option, index)=> (
        <Option
        key={option}
        count={index + 1}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
         />
    )
  )
    }
  </div>)

export default Options;
