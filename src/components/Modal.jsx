import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';

export const Modal = ({ children }) => ReactDOM.createPortal(<div className="modal">{children}</div>, document.getElementById("modal"));