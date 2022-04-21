// import TextInputImage from './images/TextInput.png';
// import TextAreaImage from './images/TextArea.png';
// import NumberInputImage from './images/NumberInput.png';
// import CheckboxGroupImage from './images/CheckboxGroup.png';
// import ToggleImage from './images/Toggle.png';
// import RadioGroupImage from './images/RadioGroup.png';
// import ToggleButtonGroupImage from './images/ToggleButtonGroup.png';
// import VisualAnalogScaleImage from './images/VisualAnalogScale.png';
// import DatePickerImage from './images/DatePicker.png';
// import LikertScaleImage from './images/LikertScale.png';
// import BooleanChoiceImage from './images/BooleanChoice.png';
// import RelativeDatePickerImage from './images/RelativeDatePicker.png';
export const TextInput = {
    label: 'Text Input',
    description: 'This is a standard text input, allowing for simple data entry up to approximately 30 characters.',
    // image: TextInputImage,
};
export const TextArea = {
    label: 'Text Area',
    description: 'This is an extra large text input, allowing for simple data entry for more than 30 characters.',
    // image: TextAreaImage,
};
export const NumberInput = {
    label: 'Number Input',
    description: 'This input is optimized for collecting numerical data, and will show a number pad if available.',
    // image: NumberInputImage,
};
export const CheckboxGroup = {
    label: 'Checkbox Group',
    description: 'This component provides a group of checkboxes so that multiple values can be toggled on or off.',
    // image: CheckboxGroupImage,
};
export const Toggle = {
    label: 'Toggle',
    description: 'This component renders a switch, which can be tapped or clicked to indicate "on" or "off". By default it is in the "off" position. If you require a boolean input without a default, use the BooleanChoice component',
    // image: ToggleImage,
};
export const RadioGroup = {
    label: 'Radio Group',
    description: 'This component renders a group of options and allow the user to choose one.',
    // image: RadioGroupImage,
};
export const ToggleButtonGroup = {
    label: 'Toggle Button Group',
    description: 'This component provides a colorful button that can be toggled "on" or "off". It is an alternative to the Checkbox Group, and allows multiple selection by default.',
    // image: ToggleButtonGroupImage,
};
export const LikertScale = {
    label: 'LikertScale',
    description: 'A component providing a likert-type scale in the form of a slider. Values are derived from the option properties of this variable, with labels for each option label.',
    // image: LikertScaleImage,
};
export const VisualAnalogScale = {
    label: 'VisualAnalogScale',
    description: 'A Visual Analog Scale (VAS) component, which sets a normalized value between 0 and 1 representing the position of the slider between each end of the scale.',
    // image: VisualAnalogScaleImage,
};
export const DatePicker = {
    label: 'DatePicker',
    description: 'A calendar date picker that allows a respondent to quickly enter year, month, and day data.',
    // image: DatePickerImage,
};
export const RelativeDatePicker = {
    label: 'RelativeDatePicker',
    description: 'A calendar date picker that automatically limits available dates relative to an "anchor date", which can be configured to the date of the interview session. ',
    // image: RelativeDatePickerImage,
};
export const BooleanChoice = {
    label: 'BooleanChoice',
    description: 'A component for boolean variables that requires the participant to actively select an option. Unlike the toggle component, this component accepts the "required" validation.',
    // image: BooleanChoiceImage,
};
