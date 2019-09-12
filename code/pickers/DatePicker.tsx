import * as System from "baseui/datepicker"
import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { controls, merge } from "../generated/Datepicker"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

function parseDateString(date) {
  const parsedDate = new Date(date)
  if (isNaN(parsedDate.valueOf())) {
    return null
  }
  return parsedDate
}

const InnerDatepicker: React.SFC<any> = ({ date, fromDate, toDate, ...props }) => {
  const [singleDate, setSingleDate] = useManagedState(parseDateString(date))
  const [rangeDate, setRangeDate] = useManagedState([parseDateString(fromDate), parseDateString(toDate)])
  const onChange = React.useCallback(({ date }) => {
    if (props.range) {
      setRangeDate(date)
    } else {
      setSingleDate(date)
    }
  }, [])

  return <System.Datepicker {...props} value={props.range ? rangeDate : singleDate} onChange={onChange} />
}

export const Datepicker = withHOC(InnerDatepicker)

const defaultFormat = "yyyy-MM-dd"
Datepicker.defaultProps = {
  width: 150,
  height: 50,
  formatString: defaultFormat,
}

addPropertyControls(Datepicker, {
  monthsShown: merge(controls.monthsShown, {
    defaultValue: 1,
    min: 1,
    max: 5,
    displayStepper: true,
  }),
  disabled: merge(controls.disabled, {}),
  error: merge(controls.error, {}),
  positive: merge(controls.positive, {}),
  placeholder: merge(controls.placeholder, {
    defaultValue: defaultFormat,
  }),
  formatString: merge(controls.formatString, { defaultValue: defaultFormat }),
  date: {
    type: ControlType.String,
    title: "Date",
    defaultValue: new Date().toISOString(),
    hidden: props => props.range,
  },
  fromDate: {
    type: ControlType.String,
    title: "From Date",
    defaultValue: new Date().toISOString(),
    hidden: props => !props.range,
  },
  toDate: {
    type: ControlType.String,
    title: "To Date",
    defaultValue: new Date().toISOString(),
    hidden: props => !props.range,
  },
  range: {
    type: ControlType.Boolean,
    title: "Range",
    defaultValue: false,
  },
})
