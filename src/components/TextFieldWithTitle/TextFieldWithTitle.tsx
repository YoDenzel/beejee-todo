import {
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputFocusEventData,
} from 'react-native';

import styles from './styles';
import { Control, Controller, FieldValues } from 'react-hook-form';

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
  borderColor = '#F0F0F0',
  borderColorOnFocus = '#ccc',
  error,
  errorText,
  containerStyle,
  control,
  name,
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
              { borderColor: borderColorOnFocus },
            ]}>
            <TextInput
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
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: () => void;
  isMultiline?: boolean;
  numberOfLines?: number;
  inputWrapperStyle?: any;
  titleStyle?: StyleProp<TextStyle>;
  error?: boolean;
  errorText?: string;
  borderColor?: string;
  borderColorOnFocus?: string;
  containerStyle?: StyleProp<ViewStyle>;
  control: Control<FieldValues>;
  name: string;
};

export default TextFieldWithTitle;
