import * as System from "baseui/phone-input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/PhoneInput"
import { withHOC } from "../withHOC"

const InnerPhoneInput: React.SFC<any> = ({ text, country: defaultCountry, onTextChange: originalOnTextChange, onCountryChange: originalOnCountryChange }) => {
  const [currentText, setText] = React.useState(text)
  const [country, setCountry] = React.useState(System.COUNTRIES[defaultCountry])

  const onTextChange = React.useCallback(e => {
    setText(e.currentTarget.value)
    if (typeof originalOnTextChange === 'function') {
      originalOnTextChange(e.currentTarget.value)
    }
  }, [originalOnTextChange])

  const onCountryChange = React.useCallback(e => {
    setCountry(e.option)
    if (typeof originalOnCountryChange === 'function') {
      originalOnCountryChange(e.option)
    }
  }, [originalOnCountryChange])

  return (
    <System.PhoneInput
      text={currentText}
      country={country}
      onTextChange={onTextChange}
      onCountryChange={onCountryChange}
    />
  )
}

export const PhoneInput = withHOC(InnerPhoneInput)

PhoneInput.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(PhoneInput, {
  text: merge(controls.text, { defaultValue: "650413182" }),
  country: {
    type: ControlType.Enum,
    title: "Country",
    defaultValue: "US",
    options: Object.keys(System.COUNTRIES),
    optionTitles: Object.keys(System.COUNTRIES).map(key => System.COUNTRIES[key].label),
  },
})
