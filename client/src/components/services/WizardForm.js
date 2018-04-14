import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class WizardForm extends Component {

  render() {
    return (<form onSubmit={this.props.handleSubmit(this.props.onServiceSubmit)}>
      <div>
        <label>What type skin do you feel you have?</label>
        <div className="buttons">
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

        <label>Do you tan?</label>
        <div className="buttons">
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

        <label>Any chronic skin conditions?</label>
        <div className="buttons">

          <label>
            <Field name="Condition" component="input" type="radio" value="Psoriasis"/> {' '}
            Psoriasis
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Eczema"/> {' '}
            Eczema
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Dematiti"/> {' '}
            Dematiti
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Cold Sores"/> {' '}
            Cold Sores
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Dermagraphic"/> {' '}
            Dermagraphic Skin
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Lupus"/> {' '}
            Lupus
          </label>
          <label>
            <Field name="Condition" component="input" type="radio" value="Vitiligo"/> {' '}
            Vitiligo
          </label>
          {/* <label>
          <Field name="condition" component="input" type="radio" value="other" />
          {' '}
          Other:
        </label> */
          }
        </div>
      </div>
      <br/>
      <div className="buttons">
        <Button bsStyle="danger">
          <Link to="/services">
            Cancel
          </Link>
        </Button>

        <Button bsStyle="success" type="submit">
          Next
        </Button>
      </div>

    </form>)
  }
}

export default reduxForm({
  // validate,
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardForm);
