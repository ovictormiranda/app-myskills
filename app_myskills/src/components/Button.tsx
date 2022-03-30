import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

//Passing all properties of TouchableOpacityProps to a type/interface I've made named as ButtonProps
interface ButtonProps extends TouchableOpacityProps {
  title: string
};

//the interface is extending TouchableOpacityProps, now the buttonProps has all of properties extended
//plus the property title, that is exclusive to ButtonProps(in this case).

//Now we can use this props in our button, we can get a specific TouchableOpacityProps property...
// Or, we can get all of properties, to do this use '...rest' declaring in function that we wanna
//use all props available on ButtonProps
//After that, we have to use them INSIDE the TouchableOpacity button
export function Button({ ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
