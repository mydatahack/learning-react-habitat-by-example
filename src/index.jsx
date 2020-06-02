import ReactHabitat from 'react-habitat';
import FormComponent from './FormComponent';
import InformationComponent from './InformationComponent';
import './scss/main.scss';

class LearnReactHabitat extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component:
    builder.register(FormComponent).as('FormComponent');
    builder.register(InformationComponent).as('InformationComponent');

    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new LearnReactHabitat();
