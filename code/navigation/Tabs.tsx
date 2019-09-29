import * as System from "baseui/tabs"
import { addPropertyControls, ControlType, RenderTarget, Frame } from "framer"
import * as React from "react"
import { isValidElement, cloneElement, useMemo, useEffect, useCallback } from "react"
import { controls, merge } from "../generated/Tabs"
import { useManagedState } from "../utils/useManagedState"
import { withHOC } from "../withHOC"

const InnerTabs: React.SFC<any> = ({ content, activeKey: defaultActiveKey, ...props }) => {
  const [activeKey, setActiveKey] = useManagedState(defaultActiveKey)
  const tabs = useMemo(() => {
    return content.map((tab, i) => (
      <System.Tab title={tab.props.name} key={i}>
        {cloneElement(tab, {
          ...tab.props,
          style: {
            position: "relative",
          },
        })}
      </System.Tab>
    ))
  }, [content])

  const onChange = useCallback(({ activeKey }) => {
    setActiveKey(activeKey)
  }, [])

  useEffect(() => setActiveKey(defaultActiveKey), [defaultActiveKey])

  return (
    <System.Tabs onChange={onChange} {...props} activeKey={activeKey}>
      {tabs}
    </System.Tabs>
  )
}

export const Tabs = withHOC(InnerTabs)

Tabs.defaultProps = {
  width: 400,
  height: 50,
}

addPropertyControls(Tabs, {
  activeKey: merge(controls.activeKey, {
    defaultValue: "0",
  }),
  renderAll: merge(controls.renderAll, {}),
  disabled: merge(controls.disabled, {}),
  orientation: merge(controls.orientation, {}),
  content: {
    title: "Tabs",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance,
    },
    defaultValue: [],
  },
})
