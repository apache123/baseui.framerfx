import { FormControl } from "baseui/form-control"
import { Input } from "baseui/input"
import { addPropertyControls } from "framer"
import * as React from "react"
import { useFormControlValidation, FormValidationPropertyControls } from "../utils/PropertyControls"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerFormControlInput = ({ value, placeholder, onChange: originalOnChange, ...props }: any) => {
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
      <Input
        value={currentValue}
        onChange={onChange}
        onBlur={() => startValidation(props, currentValue)}
        placeholder={placeholder}
        disabled={!!props.disabled}
        positive={!!positive}
        error={!!error}
      />
    </FormControl>
  )
}

export const FormControlInput = withHOC(InnerFormControlInput)

FormControlInput.defaultProps = {
  width: 400,
  height: 120,
}

addPropertyControls(FormControlInput, {
  ...FormValidationPropertyControls,
})
