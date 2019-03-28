import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import NotefulContext from './NotefulContext'

class FolderError extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {

    if (this.state.hasError) {    
  
        return (
          <h2>Could not add Folder.</h2>
        );
      }
      return this.props.children;
  }
}

export default FolderError;