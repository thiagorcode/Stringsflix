/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

interface buttonDto {
  to: string;
  className: string;
  children: string;
}

const ButtonLink: React.FC<buttonDto> = (props) => (
  <Link to={props.to} className={props.className}>
    {props.children}
  </Link>
);
export default ButtonLink;
