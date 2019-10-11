import * as System from 'baseui/input';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {compose} from '../utils/compose';
import {controls, merge} from '../generated/Input';
import {UseGlobalStatePropertyControls} from '../utils/PropertyControls';
import {withManagedState} from '../utils/stateManagement/withManagedState';
import {withHOC} from '../withHOC';

const InnerInput: React.SFC<any> = ({onChange, ...props}) => {
  const onValueChange = React.useCallback(e => onChange(e.target.value), [onChange]);
  return <System.Input onChange={onValueChange} {...props} />;
};

export const Input = compose(
  withHOC,
  withManagedState,
)(InnerInput);

Input.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: 'value',
};

addPropertyControls(Input, {
  clearable: merge(controls.clearable, {defaultValue: true}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {defaultValue: 'Placeholder'}),
  value: merge(controls.value, {}),
  type: {
    type: ControlType.Enum,
    options: ['text', 'password', 'number'],
    optionTitles: ['Text', 'Password', 'Number'],
    defaultValue: 'text',
  },
  size: merge(controls.size, {}),
  ...UseGlobalStatePropertyControls,
});
