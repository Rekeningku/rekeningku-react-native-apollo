import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import {
  NBTextInput,
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
            <Field name="fullname" component={NBTextInput} label="Nama Lengkap" validate={[required]} floatingLabel/>
            <Field name="email" component={NBTextInput} label="Email" validate={[required]} floatingLabel/>
            <Field name="password" component={NBTextInput} label="Password" validate={[required]} floatingLabel/>
            <Field name="password_confirm" component={NBTextInput} label="Konfirmasi Password" validate={[required]} floatingLabel/>
          </View>
          <Button
            block
            style={{
              marginTop: 25,
              marginBottom: 25,
              backgroundColor : '#2B79C9'
            }}
            onPress={handleSubmit}
          >
              <Text style={{ color : 'white' }}>Buat Akun</Text>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const ContainerForm = reduxForm({
  form: 'register',
})(Form)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default ContainerForm