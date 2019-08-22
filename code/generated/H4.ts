// WARNING: This is an auto-generated file. Changes to this file will be lost!
import { ControlType, PropertyControls, ControlDescription } from "framer";

export type Controls = {
  children: ControlDescription;
  src: ControlDescription;
  alignContent: ControlDescription;
  alignItems: ControlDescription;
  alignSelf: ControlDescription;
  flexDirection: ControlDescription;
  display: ControlDescription;
  flex: ControlDescription;
  gridAutoFlow: ControlDescription;
  gridColumnGap: ControlDescription;
  gridGap: ControlDescription;
  gridRowGap: ControlDescription;
  justifyContent: ControlDescription;
  justifyItems: ControlDescription;
  justifySelf: ControlDescription;
  position: ControlDescription;
  width: ControlDescription;
  minWidth: ControlDescription;
  maxWidth: ControlDescription;
  height: ControlDescription;
  minHeight: ControlDescription;
  maxHeight: ControlDescription;
  overflow: ControlDescription;
  margin: ControlDescription;
  marginTop: ControlDescription;
  marginRight: ControlDescription;
  marginBottom: ControlDescription;
  marginLeft: ControlDescription;
  padding: ControlDescription;
  paddingTop: ControlDescription;
  paddingRight: ControlDescription;
  paddingBottom: ControlDescription;
  paddingLeft: ControlDescription;
  left: ControlDescription;
  top: ControlDescription;
  right: ControlDescription;
  bottom: ControlDescription;
};

/**
 * Contains the inferred property controls.
 */
export const controls: Controls = {
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  src: { title: "Src", defaultValue: "", type: ControlType.String },
  alignContent: {
    title: "AlignContent",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Space-between",
      "Space-around",
      "Space-evenly",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  alignItems: {
    title: "AlignItems",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  alignSelf: {
    title: "AlignSelf",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  flexDirection: {
    title: "FlexDirection",
    options: [
      "inherit",
      "initial",
      "unset",
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Row",
      "Row-reverse",
      "Column",
      "Column-reverse"
    ],
    defaultValue: "inherit",
    type: ControlType.Enum
  },
  display: {
    title: "Display",
    options: [
      "inherit",
      "initial",
      "unset",
      "block",
      "inline",
      "run-in",
      "flow",
      "flow-root",
      "table",
      "flex",
      "grid",
      "ruby",
      "block flow",
      "inline table",
      "flex run-in",
      "list-item",
      "list-item block",
      "list-item inline",
      "list-item flow",
      "list-item flow-root",
      "list-item block flow",
      "list-item block flow-root",
      "flow list-item block",
      "table-row-group",
      "table-header-group",
      "table-footer-group",
      "table-row",
      "table-cell",
      "table-column-group",
      "table-column",
      "table-caption",
      "ruby-base",
      "ruby-text",
      "ruby-base-container",
      "ruby-text-container",
      "contents",
      "none",
      "inline-block",
      "inline-table",
      "inline-flex",
      "inline-grid"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Block",
      "Inline",
      "Run-in",
      "Flow",
      "Flow-root",
      "Table",
      "Flex",
      "Grid",
      "Ruby",
      "Block flow",
      "Inline table",
      "Flex run-in",
      "List-item",
      "List-item block",
      "List-item inline",
      "List-item flow",
      "List-item flow-root",
      "List-item block flow",
      "List-item block flow-root",
      "Flow list-item block",
      "Table-row-group",
      "Table-header-group",
      "Table-footer-group",
      "Table-row",
      "Table-cell",
      "Table-column-group",
      "Table-column",
      "Table-caption",
      "Ruby-base",
      "Ruby-text",
      "Ruby-base-container",
      "Ruby-text-container",
      "Contents",
      "None",
      "Inline-block",
      "Inline-table",
      "Inline-flex",
      "Inline-grid"
    ],
    defaultValue: "inherit",
    type: ControlType.Enum
  },
  flex: { title: "Flex", defaultValue: "", type: ControlType.String },
  gridAutoFlow: {
    title: "GridAutoFlow",
    options: [
      "inherit",
      "initial",
      "unset",
      "row",
      "column",
      "dense",
      "row dense",
      "column dense"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Row",
      "Column",
      "Dense",
      "Row dense",
      "Column dense"
    ],
    defaultValue: "inherit",
    type: ControlType.Enum
  },
  gridColumnGap: {
    title: "GridColumnGap",
    defaultValue: "",
    type: ControlType.String
  },
  gridGap: { title: "GridGap", defaultValue: "", type: ControlType.String },
  gridRowGap: {
    title: "GridRowGap",
    defaultValue: "",
    type: ControlType.String
  },
  justifyContent: {
    title: "JustifyContent",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "left",
      "right"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Space-between",
      "Space-around",
      "Space-evenly",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Left",
      "Right"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  justifyItems: {
    title: "JustifyItems",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto",
      "left",
      "right",
      "legacy right",
      "legacy left",
      "legacy center"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto",
      "Left",
      "Right",
      "Legacy right",
      "Legacy left",
      "Legacy center"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  justifySelf: {
    title: "JustifySelf",
    options: [
      "center",
      "start",
      "end",
      "flex-start",
      "flex-end",
      "normal",
      "baseline",
      "first baseline",
      "last baseline",
      "stretch",
      "safe center",
      "unsafe center",
      "inherit",
      "initial",
      "unset",
      "self-start",
      "self-end",
      "auto",
      "left",
      "right"
    ],
    optionTitles: [
      "Center",
      "Start",
      "End",
      "Flex-start",
      "Flex-end",
      "Normal",
      "Baseline",
      "First baseline",
      "Last baseline",
      "Stretch",
      "Safe center",
      "Unsafe center",
      "Inherit",
      "Initial",
      "Unset",
      "Self-start",
      "Self-end",
      "Auto",
      "Left",
      "Right"
    ],
    defaultValue: "center",
    type: ControlType.Enum
  },
  position: {
    title: "Position",
    options: ["static", "absolute", "relative", "fixed", "sticky"],
    optionTitles: ["Static", "Absolute", "Relative", "Fixed", "Sticky"],
    defaultValue: "static",
    type: ControlType.Enum
  },
  width: { title: "Width", defaultValue: "", type: ControlType.String },
  minWidth: { title: "MinWidth", defaultValue: "", type: ControlType.String },
  maxWidth: { title: "MaxWidth", defaultValue: "", type: ControlType.String },
  height: { title: "Height", defaultValue: "", type: ControlType.String },
  minHeight: { title: "MinHeight", defaultValue: "", type: ControlType.String },
  maxHeight: { title: "MaxHeight", defaultValue: "", type: ControlType.String },
  overflow: {
    title: "Overflow",
    options: [
      "inherit",
      "initial",
      "unset",
      "auto",
      "visible",
      "hidden",
      "scroll",
      "scrollX",
      "scrollY"
    ],
    optionTitles: [
      "Inherit",
      "Initial",
      "Unset",
      "Auto",
      "Visible",
      "Hidden",
      "Scroll",
      "ScrollX",
      "ScrollY"
    ],
    defaultValue: "inherit",
    type: ControlType.Enum
  },
  margin: { title: "Margin", defaultValue: "", type: ControlType.String },
  marginTop: { title: "MarginTop", defaultValue: "", type: ControlType.String },
  marginRight: {
    title: "MarginRight",
    defaultValue: "",
    type: ControlType.String
  },
  marginBottom: {
    title: "MarginBottom",
    defaultValue: "",
    type: ControlType.String
  },
  marginLeft: {
    title: "MarginLeft",
    defaultValue: "",
    type: ControlType.String
  },
  padding: { title: "Padding", defaultValue: "", type: ControlType.String },
  paddingTop: {
    title: "PaddingTop",
    defaultValue: "",
    type: ControlType.String
  },
  paddingRight: {
    title: "PaddingRight",
    defaultValue: "",
    type: ControlType.String
  },
  paddingBottom: {
    title: "PaddingBottom",
    defaultValue: "",
    type: ControlType.String
  },
  paddingLeft: {
    title: "PaddingLeft",
    defaultValue: "",
    type: ControlType.String
  },
  left: { title: "Left", defaultValue: "", type: ControlType.String },
  top: { title: "Top", defaultValue: "", type: ControlType.String },
  right: { title: "Right", defaultValue: "", type: ControlType.String },
  bottom: { title: "Bottom", defaultValue: "", type: ControlType.String }
};

export function merge(
  inferredControls: ControlDescription,
  overrides: {}
): ControlDescription {
  return { ...inferredControls, ...overrides };
}
