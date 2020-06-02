import ReactHabitat from 'react-habitat';
import FormComponent from './FormComponent';
import './scss/main.scss';

class MyApp extends ReactHabitat.Bootstrapper {
  constructor(){
      super();

      // Create a new container builder:
      const builder = new ReactHabitat.ContainerBuilder();

      // Register a component:
      builder.register(FormComponent).as('FormComponent');


      // Finally, set the container:
      this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new MyApp();