import React, { Component } from 'react';
import { connect } from 'react-redux';
// An array of existing tags. Just uncomment when you want to use them.
// import tagsJSON from '../../api/tags.json';
import './TagEditor.css';


class TagEditor extends Component {

  render() {
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
      </div>
    );
  }
}

export default TagEditor;
