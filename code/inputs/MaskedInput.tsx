import * as System from 'baseui/input';
import {addPropertyControls, ControlType} from 'framer';
import * as React from 'react';
import {controls, merge} from '../generated/MaskedInput';
import {withHOC} from '../withHOC';
import {useManagedState} from '../utils/useManagedState';

const InnerMaskedInput: React.SFC<any> = ({value, willChangeTransform: _, onChange: originalOnChange, ...props}) => {
  const [currentValue, setValue] = useManagedState(value);

  const onChange = React.useCallback(
    e => {
      setValue(e.target['value']);
      if (typeof originalOnChange === 'function') {
        originalOnChange(e.target['value']);
      }
    },
    [originalOnChange],
  );

  return <System.MaskedInput value={currentValue} onChange={onChange} {...props} />;
};

export const MaskedInput = withHOC(InnerMaskedInput);

MaskedInput.defaultProps = {
  width: 150,
  height: 50,
};

addPropertyControls(MaskedInput, {
  mask: merge(controls.mask, {defaultValue: '(999) 999-9999'}),
  clearable: merge(controls.clearable, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {defaultValue: 'Placeholder'}),
  size: merge(controls.size, {}),
  value: merge(controls.value, {defaultValue: '1234567890'}),
});
