import React from "react";

const NewStatusForm = () => {
  return (
    <div className="ui form error">
      <div className="field">
        <label>Update your status</label>
        <textarea rows="2" />
      </div>
      <div className="ui submit button">Submit</div>
    </div>
  );
};

export default NewStatusForm;
