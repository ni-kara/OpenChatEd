import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {Form, FormItem} from 'react-native-form-component';

export default function RegistrationPage() {
  return (
    <View style={styles.container}>

      {/* Icon Form */}
      <View style={styles.logoContainer}>
        <Image 
        source={require('./../../assets/logo.png')} 
        style={styles.logo}
        />
      </View>

      {/* Registration Form */}
      <View  style={styles.registrationContainer}>
        <Form 
          onButtonPress={()=> console.warn('do something')} 
          style={styles.form} 
          buttonText='Sign Up'
          buttonStyle={styles.formButton}
          >
          <FormItem 
            style={styles.formItem}
            labelStyle={styles.formItemLable}
            textInputStyle={styles.formItemInput}
            label='Username'            
            asterik={true}
            isRequired
          />
          <FormItem  
           style={styles.formItem}
           labelStyle={styles.formItemLable}
           textInputStyle={styles.formItemInput}
           label='Email'            
           asterik={true}
           isRequired     
          />
          <FormItem 
           style={styles.formItem}
           labelStyle={styles.formItemLable}
           textInputStyle={styles.formItemInput}
           asterik={true}
           isRequired
            label='Password'
            />
        </Form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },

  registrationContainer: {
    flex: 2,
    
    backgroundColor: '#efefef',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{    
    width: '100%',    
    padding: 20,      
  },
  formButton:{
    backgroundColor: 'dodgerblue',
  },
  formItem: {
    borderRadius: 50,

    overflow:"hidden",
    shadowColor: '#000',
    
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  2,
    shadowRadius: 3,
    elevation:15,
  },
  formItemLable:{        
    fontSize: 18,
  },
  formItemInput:{    
    fontSize: 18,
  }


});