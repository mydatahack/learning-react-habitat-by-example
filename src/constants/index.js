// eslint-disable-next-line import/prefer-default-export
export const fwOptions = ['React', 'Vue', 'Angular', 'Aurelia', 'Svelte', 'Preact'];

export const formSchema = {
  version: 0,
  id: 'loginForm',
  fields: [
    {
      id: 'email',
      path: 'email',
      type: 'text',
      data: {
        label: 'Your email address',
      },
    },
    {
      id: 'password',
      path: 'secret.password',
      type: 'password',
      data: {
        label: 'Your password',
      },
    },
  ],
};
