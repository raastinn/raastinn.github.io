import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center max-w-8 max-h-8">
        <img className="bg-white mb-3 max-h-8 max-w-8" src={data.companylogo}   style={{ maxWidth: '20rem', maxHeight: '10rem' }} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;