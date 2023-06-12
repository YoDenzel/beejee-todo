import {
  Text,
  View,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';

import styles from './styles';

const TextFieldWithTitle = ({
  inputWrapperStyle,
  isMultiline,
  maxLength,
  numberOfLines,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  inputStyle,
  title,
  titleStyle,
  borderColor = '#ccc',
  containerStyle,
  control,
  name,
  disabled,
}: TTextFieldWithTitle) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={[styles.container, containerStyle]}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          <View
            style={[
              styles.inputWrapper,
              inputWrapperStyle,
              { borderColor: borderColor },
            ]}>
            <TextInput
              editable={!disabled}
              maxLength={maxLength}
              style={[styles.input, inputStyle]}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              multiline={isMultiline}
              numberOfLines={numberOfLines}
              scrollEnabled={false}
            />
          </View>
        </View>
      )}
    />
  );
};

type TTextFieldWithTitle = {
  title?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  placeholderTextColor?: string;
  inputStyle?: StyleProp<TextStyle>;
  isMultiline?: boolean;
  numberOfLines?: number;
  inputWrapperStyle?: any;
  titleStyle?: StyleProp<TextStyle>;
  borderColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  control: Control<FieldValues>;
  name: string;
  disabled?: boolean;
};

export default TextFieldWithTitle;
