import React, {Component} from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="content">
         <span id="vibha">Hello world</span>
          <Button variant="outline-primary">Primary</Button>
        </div>
      </div>
    );
  }
}

export default App;
