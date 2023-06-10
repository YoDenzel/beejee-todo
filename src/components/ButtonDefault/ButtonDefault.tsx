import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import styles from './styles';

const ButtonDefault = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}: TButtonDefault) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

type TButtonDefault = {
  text: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default ButtonDefault;
