import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Icons } from 'assets/icons';

const HIT_SLOPS = {
  top: 20,
  bottom: 20,
  left: 30,
  right: 30,
};

const ScreenHeader: FunctionComponent<ScreenHeaderProps> = ({
  backButtonColor,
  onBack,
  renderButtons,
  reverse,
  children,
  style,
}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity hitSlop={HIT_SLOPS} onPress={handleBack}>
        <Icons.Chevron color={reverse ? 'white' : backButtonColor} />
      </TouchableOpacity>
      {children}
      {renderButtons && renderButtons()}
    </View>
  );
};

interface ScreenHeaderProps {
  backButtonColor?: string;
  onBack?: () => void;
  renderButtons?: () => React.ReactNode;
  reverse?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

ScreenHeader.defaultProps = {
  backButtonColor: 'black',
} as Partial<ScreenHeaderProps>;

export default ScreenHeader;
