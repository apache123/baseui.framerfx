import * as System from "baseui/pin-code"
import { addPropertyControls } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/PinCode"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerPinCode: React.SFC<any> = ({ values, onChange: originalOnChange, ...props }) => {
  const [currentValues, setValues] = useManagedState<string[]>(values)

  const onChange = React.useCallback(e => {
    setValues(e.values)
    if (typeof originalOnChange === 'function') {
      originalOnChange(e.values)
    }
  }, [originalOnChange])

  return <System.PinCode values={currentValues} onChange={onChange} {...props} />
}

export const PinCode = withHOC(InnerPinCode)

PinCode.defaultProps = {
  width: 225,
  height: 56,
}

addPropertyControls(PinCode, {
  positive: merge(controls.positive, {}),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  placeholder: merge(controls.placeholder, { defaultValue: "." }),
  size: merge(controls.size, {}),
})
