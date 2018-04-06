import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import ServiceField from './ServiceField';
import formFields from './formFields';
import {Button} from 'react-bootstrap';

class WizardForm extends Component {
  render() {
    return (<form onSubmit={this.props.handleSubmit(this.props.onServiceSubmit)}>
      <div>
        <label>What type skin do you feel you have?</label>
        <div className="buttons">
          <label>
            <Field name="skinType" component="input" type="radio" value="dry"/> {' '}
            Dry
          </label>
          <label>
            <Field name="skinType" component="input" type="radio" value="oily"/> {' '}
            Oily
          </label>
          <label>
            <Field name="skinType" component="input" type="radio" value="both"/> {' '}
            Oily/Combination
          </label>
          {/* <Field name="skinType" component={renderError} /> */}
        </div>

        <label>Do you tan?</label>
        <div className="buttons">
          <label>
            <Field name="tan" component="input" type="radio" value="burnAlways"/> {' '}
            Burn Always
          </label>
          <label>
            <Field name="tan" component="input" type="radio" value="burnThenTan"/> {' '}
            Burn then tan
          </label>
          <label>
            <Field name="tan" component="input" type="radio" value="AlwaysTans"/> {' '}
            Always tans
          </label>
          {/* <Field name="type" component={renderError} /> */}
        </div>

        <label>Any chronic skin conditions?</label>
        <div className="buttons">

          <label>
            <Field name="condition" component="input" type="radio" value="psoriasis"/> {' '}
            Psoriasis
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="eczema"/> {' '}
            Eczema
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="dematiti"/> {' '}
            Dematiti
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="coldSores"/> {' '}
            Cold Sores
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="dermagraphic"/> {' '}
            Dermagraphic Skin
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="lupus"/> {' '}
            Lupus
          </label>
          <label>
            <Field name="condition" component="input" type="radio" value="vitiligo"/> {' '}
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

      {/* <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
     */
      }
    </form>)
  }
}

export default reduxForm({
  // validate,
  form: 'wizardForm',
  destroyOnUnmount: false
})(WizardForm);
