import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { getSeenPrompts } from '../../reducers/user.reducer';

import UnobtrusivePrompt from '../UnobtrusivePrompt';

const PROMPTS = [];

const EditorPrompts = ({ prompt, dismissPrompt }) => {
  if (!prompt) {
    return null;
  }

  return (
    <UnobtrusivePrompt
      title={prompt.title}
      onDismiss={() => dismissPrompt(prompt.id)}
    >
      {prompt.contents()}
    </UnobtrusivePrompt>
  );
};

const mapStateToProps = (state) => {
  const seenPrompts = getSeenPrompts(state);
  const unseenPrompts = PROMPTS.filter(
    (prompt) => !seenPrompts.includes(prompt.id)
  );

  return {
    prompt: unseenPrompts[0],
  };
};

const mapDispatchToProps = { dismissPrompt: actions.dismissPrompt };

export default connect(mapStateToProps, mapDispatchToProps)(EditorPrompts);
