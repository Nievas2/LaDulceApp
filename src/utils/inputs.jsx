import React from "react";
import { useField } from "formik";
import { TextInput, Text } from "react-native";
export const TextInputFormikContact = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
        
        style={{
          padding: 5,
          paddingHorizontal: 10,
          fontSize: 20,
          backgroundColor: "#fff",
          borderRadius: 15,
          borderColor: "#88f",
          borderWidth: 2,
          marginBottom: 5,
        }}
      />
      {meta.error && <Text style={{color:"red", backgroundColor:"#fff", borderRadius: 10, marginBottom: 10, padding: 5, fontSize: 15, fontWeight:"bold",}}>{meta.error}</Text>}
    </>
  );
};
export const TextInputFormik = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        editable
        
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
        
        style={{
          padding: 5,
          paddingHorizontal: 10,
          fontSize: 20,
          backgroundColor: "#fff",
          borderRadius: 5,
          borderColor: "#88f",
          borderWidth: 2,
          marginBottom: 5,
        }}
      />
      {meta.error && <Text style={{color:"red", backgroundColor:"#fff", borderRadius: 5, marginBottom: 10, padding: 5, fontSize: 15, fontWeight:"bold",}}>{meta.error}</Text>}
    </>
  );
};
export const TextInputFormikNumber = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        editable
        error={meta.error}
        value={field.value}
        keyboardType="numeric"
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
        
        style={{
          padding: 5,
          paddingHorizontal: 10,
          fontSize: 20,
          backgroundColor: "#fff",
          borderRadius: 5,
          borderColor: "#88f",
          borderWidth: 2,
          marginBottom: 5,
        }}
      />
      {meta.error && <Text style={{color:"red", backgroundColor:"#fff", borderRadius: 5, marginBottom: 10, padding: 5, fontSize: 15, fontWeight:"bold",}}>{meta.error}</Text>}
    </>
  );
};
