// ClientForm shows a form for a user to add input
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import ClientField from './ClientField';

class ClientForm extends Component {

  renderFields()  {
    return (
      <div>
        <Field type="text" name="Name" component={ClientField}/>
      </div>
    );
  }

  render() {
    return (<div>
      <form onSubmit={
        this.props.handleSubmit(
          values => console.log(values)
        )
      }>
        {this.renderFields()}
        <button type="submit">Sumbit</button>
      </form>
    </div>);
  }
}

export default reduxForm({form: 'clientForm'})(ClientForm);
