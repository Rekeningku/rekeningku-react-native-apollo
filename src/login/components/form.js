import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import {
  NBTextInput,
  NBSwitch,
  NBTextArea,
  NBDatePicker,
} from 'nb-redux-form'
import {
  Button,
  Text,
} from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
})
const required = value => value ? undefined : 'Required'
class Form extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Field name="email" component={NBTextInput} label="Email" validate={[required]} floatingLabel/>
            <Field name="password" component={NBTextInput} label="Password" validate={[required]} floatingLabel/>
          </View>
          <Button
            block
            style={{
              marginTop: 25,
              marginBottom: 25,
              backgroundColor : '#2B79C9'
            }}
            onPress={()=>handleSubmit()}
          >
              <Text style={{ color : 'white' }}>Login</Text>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const ContainerForm = reduxForm({
  form: 'login',
})(Form)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContainerForm