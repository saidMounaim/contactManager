import React from 'react';
import classnames from 'classnames';

const InputGroup = (props) => {
  return (
      <div className="form-group">
          <label htmlFor={props.label}>{props.label}</label>
          <input type={props.type} className="form-control"
              name={props.name}
              value={props.value}
              onChange={props.onChange}
              className={
                  classnames('form-control', {
                      'is-invalid': props.errors 
                  })
              }
          />
          <div className="invalid-feedback">
            {props.errors}
          </div>
      </div>
  )
}

export default InputGroup;