import { FormControl } from "baseui/form-control"
import { MaskedInput } from "baseui/input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { useFormControlValidation, FormValidationPropertyControls } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerFormControlMaskedInput = ({ value, placeholder, mask, onChange: originalOnChange, ...props }: any) => {
  const [currentValue, setValue] = useManagedState<string>(value)
  const [{ positive, error }, startValidation] = useFormControlValidation()

  const onChange = React.useCallback(e => {
    setValue(e.target["value"])
    if (typeof originalOnChange === 'function') {
      originalOnChange(e.target["value"])
    }
  }, [originalOnChange])

  return (
    <FormControl {...props} positive={positive} error={error}>
      <MaskedInput
        value={currentValue}
        onChange={onChange}
        onBlur={() => startValidation(props, currentValue)}
        placeholder={placeholder}
        disabled={!!props.disabled}
        positive={!!positive}
        error={!!error}
        mask={mask}
      />
    </FormControl>
  )
}

export const FormControlMaskedInput = withHOC(InnerFormControlMaskedInput)

FormControlMaskedInput.defaultProps = {
  width: 400,
  height: 120,
}

addPropertyControls(FormControlMaskedInput, {
  ...FormValidationPropertyControls,
  mask: { type: ControlType.String, defaultValue: "(999) 999-999-9999" },
})
