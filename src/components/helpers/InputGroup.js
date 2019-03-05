import React from 'react';
import classnames from 'classnames';

const InputGroup = (props) => {
  return (
      <div className="form-group">
          <label htmlFor={props.label}>{props.label}</label>
          <input type={props.type} className="form-control"
              name={props.name}
              className={
                  classnames('form-control', {
                      'is-invalid': props.error
                  })
              }
              defaultValue={props.value}
              onChange={props.onChange}
          />
          <div className="invalid-feedback">
            {props.error}
          </div>
      </div>
  )
}

export default InputGroup;