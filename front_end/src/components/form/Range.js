import React from "react"
import { Col, Row, FormLabel, FormGroup, FormControl } from "react-bootstrap"

const Range = ({ label, value, min, max, handleOnChange }) => (
  <Col>
    <FormGroup controlId={label}>
      <Row>
        <Col xs="6" className="text-right">
          <FormLabel>{label}</FormLabel>
        </Col>
        <Col xs="2">
          <p>{value}</p>
        </Col>
      </Row>

      <FormControl
        type="range"
        className="custom-range"
        value={value}
        min={min}
        max={max}
        data-unit="%"
        onChange={event => handleOnChange(event, label)}
      />
    </FormGroup>
  </Col>
)

export default Range
