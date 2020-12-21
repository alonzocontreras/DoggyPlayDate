import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from "react-native-material-textfield";
import { compose } from "recompose";
import {
    handleTextInput,
    withNextInputAutoFocusForm,
    withNextInputAutoFocusInput
} from "react-native-formik";


export const FormikInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextField);

export const Form = withNextInputAutoFocusForm(View);