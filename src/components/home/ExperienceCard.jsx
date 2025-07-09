import React from 'react';

import {
  Col,
} from "react-bootstrap";
import {Link} from "react-router-dom";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center max-w-8 max-h-8">
          <a href={data.link} target="_blank">
              <img className="bg-white mb-3 max-h-8 max-w-8 rounded" src={data.companylogo} style={{ maxWidth: '20rem', maxHeight: '10rem' }} alt="" />
          </a>
          <p className="lead">
              <strong>
                {data.company}
              </strong>
              <br/>
                {data.role}
              <br/>
              <small className="text-muted">{data.date}</small>
          </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;