import React from 'react';
import { Form } from 'react-bootstrap';

const DynamicSelect = (props) => {
  return (
    <>
      <Form.Select onChange={props.handleSelectChange}>
        {props.option.map((data, i) => {
          return (
            <option value={data} key={i}>
              {data}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
};

export default DynamicSelect;
