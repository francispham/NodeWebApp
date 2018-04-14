import React from 'react';
import {reduxForm, Field} from 'redux-form';
// import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const skinCondition = ["Psoriasis", "Eczema", "Dematiti", "Cold Sores", "Dermagraphic", "Lupus", "Vitiligo"]


const renderChronicCondition = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select Your Skin Condition...</option>
      {skinCondition.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const SkinPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props;
    // console.log(props)
    return (<form onSubmit={handleSubmit}>
      <div>
        <h3>Personal Information:</h3><br/>

        <div className="buttons">
          <label>What type skin do you feel you have?</label>
          <label>
            <Field name="SkinType" component="input" type="radio" value="Dry"/> {' '}
            Dry
          </label>
          <label>
            <Field name="SkinType" component="input" type="radio" value="Oily"/> {' '}
            Oily
          </label>
          <label>
            <Field name="SkinType" component="input" type="radio" value="Oily/Combination"/> {' '}
            Oily/Combination
          </label>
          {/* <Field name="skinType" component={renderError} /> */}
        </div>
        <div className="buttons">
          <label>Do you tan?</label>
          <label>
            <Field name="Tan" component="input" type="radio" value="Burn always"/> {' '}
            Burn Always
          </label>
          <label>
            <Field name="Tan" component="input" type="radio" value="Burn then Tan"/> {' '}
            Burn then Tan
          </label>
          <label>
            <Field name="Tan" component="input" type="radio" value="Always Tans"/> {' '}
            Always Tans
          </label>
          {/* <Field name="type" component={renderError} /> */}
        </div>
        <div className="buttons">
          <label>Any chronic skin conditions?</label>
        <Field name="chronicSkin" component={renderChronicCondition} />
        </div>
      </div>
      <br/>

      <div className="buttons">
        <Button bsStyle="danger" type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
        <Button bsStyle="success" type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </div>

    </form>)
}

export default reduxForm({
  // validate,
  form: 'clientForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SkinPage);
