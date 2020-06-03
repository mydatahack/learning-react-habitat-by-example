import React from 'react';
import FormBuilder from 'schematik-forms/lib';
import TextInput from './components/TextInput';
import { formSchema } from './constants';

const SchematikFormComponent = () => (
  <>
    <p>Form with Schematik Foms</p>
    <FormBuilder
      config={formSchema}
      renderButtons={() => (<button type="submit">Log in</button>)}
      registeredComponents={{
        text: {
          component: TextInput,
          defaultValue: '',
        },
        password: {
          component: TextInput,
          defaultValue: '',
        },
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  </>
);

export default SchematikFormComponent;
