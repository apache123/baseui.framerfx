import * as System from "baseui/phone-input"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/PhoneInput"
import { withHOC } from "../withHOC"

const InnerPhoneInput: React.SFC<any> = ({ text, country: defaultCountry }) => {
  const [currentText, setText] = React.useState(text)
  const [country, setCountry] = React.useState(System.COUNTRIES[defaultCountry])
  return (
    <System.PhoneInput
      text={currentText}
      country={country}
      onTextChange={event => {
        setText(event.currentTarget.value)
      }}
      onCountryChange={(event: any) => {
        setCountry(event.option)
      }}
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
