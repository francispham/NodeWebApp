// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} autoComplete={"on|off"}/>
      <div className="red-text" style={{ marginBottom: '20' }}>
        {touched && error}
      </div>
    </div>
  );
};
