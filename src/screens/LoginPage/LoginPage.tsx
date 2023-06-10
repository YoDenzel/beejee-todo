import { Text, View } from 'react-native';

import styles from './styles';
import { ButtonDefault } from 'components/ButtonDefault';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';

function LoginPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LoginPage'>) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Выберите способ входа</Text>
      <View style={styles.loginButtonsContainer}>
        <ButtonDefault text="Login as Guest" onPress={() => undefined} />
        <ButtonDefault
          text="Auth"
          onPress={() => undefined}
          containerStyle={styles.authButtonContainer}
          textStyle={styles.authButtonText}
        />
      </View>
    </View>
  );
}

export default LoginPage;
