import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators.js';
import TagIcon from './TagIcon';
import Dropdown from './Dropdown';
import ColorSelect from './ColorSelect';
import ClickableButton from './ClickableButton';
import Input from './Input';
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
        <div id='tag-creation' ref={(tagCreator) => { this.tagCreator = tagCreator } }
          onFocus={() => displayTagSelect(true)}
          onBlur={() => displayTagSelect(false)}>
          <div id='input-container'>
            <Input value={tagName} handleChange={changeName} />
            <Dropdown availableTags={availableTags} visible={dropDownVisible} addTag={displayTag} />
          </div>
          <div id='color-btn'>
            <ClickableButton label="NEW" idName={"color-select-btn"} handleClick={submitTagName} />
            <div className='down-arrow'></div>
          </div>
          <ClickableButton label="Add Tag" idName={"submit-tag-btn"} handleClick={submitTag} />
          <ColorSelect selectColor={selectTagColor} visible={colorSelectVisible} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(TagEditor);
