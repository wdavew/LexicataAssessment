import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators.js';
import TagIcon from './TagIcon';
import Dropdown from './Dropdown';
import ColorSelect from './ColorSelect';
import ClickableButton from './ClickableButton';
import Input from './Input';


// An array of existing tags. Just uncomment when you want to use them.
// import tagsJSON from '../../api/tags.json';
import './TagEditor.css';

class TagEditor extends Component {
  render() {
    const {
      displayedTags,
      availableTags,
      tagName,
      removeTag,
      changeName,
      submitTagName,
      submitTag,
      selectTagColor,
      displayTagSelect,
      displayTag,
      colorSelectVisible,
      dropDownVisible,
    } = this.props;
    const tagList = displayedTags.map((tag) => (
      <TagIcon key={tag.label} label={tag.label} color={tag.color} removeSelf={removeTag} />
    ));
    return (
      <div className="tag-editor">
        <h5 className="tag-editor-title">TAGS</h5>
        <div id='tag-display'>
          {tagList}
        </div>

        <div id='tag-creation'>
          <div id='input-container'>
            <Input value={tagName} handleChange={changeName} dropdown={displayTagSelect} />
            <Dropdown availableTags={availableTags} visible={dropDownVisible} addTag={displayTag} />
          </div>
          <ClickableButton label="NEW" idName={"color-select-btn"} handleClick={submitTagName} />
          <ClickableButton label="Add Tag" idName={"submit-tag-btn"} handleClick={submitTag} />
        </div>
        <ColorSelect selectColor={selectTagColor} visible={colorSelectVisible} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(TagEditor);
