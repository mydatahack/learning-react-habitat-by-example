import ReactHabitat from 'react-habitat';
import FormComponent from './FormComponent';
import InformationComponent from './InformationComponent';
import SchematikFormComponent from './SchematikFormComponent';
import './scss/main.scss';

class LearnReactHabitat extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component:
    builder.register(FormComponent).as('FormComponent');
    builder.register(InformationComponent).as('InformationComponent');
    builder.register(SchematikFormComponent).as('SchematikFormComponent');

    // eslint-disable-next-line no-undef
    window.updateHabitat = this.update.bind(this);
    // Finally, set the container:
    this.setContainer(builder.build());
  }
}

// Always export a 'new' instance so it immediately evokes:
export default new LearnReactHabitat();
