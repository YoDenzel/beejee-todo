import { Alert, Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { ButtonDefault } from 'components/ButtonDefault';
import { RootStackParamList } from 'navigation/types';
import { TextFieldWithTitle } from 'components/TextFieldWithTitle';
import { ScreenHeader } from 'components/ScreenHeader';
import { useLogin } from 'hooks/useLogin';

import styles from './styles';

function LoginPage({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LoginPage'>) {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: '', password: '' },
  });
  const { top } = useSafeAreaInsets();
  const { mutateAsync } = useLogin();

  const onSubmit = handleSubmit(({ password, username }) => {
    if (password.length === 0 || username.length === 0) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }
    mutateAsync({ password, username }).then(response => {
      if (response?.status === 'error') {
        Alert.alert('Ошибка', 'Неверный логин или пароль');
      } else {
        navigation.navigate('MainPage');
      }
    });
  });

  return (
    <View style={styles.screen}>
      <SafeAreaView style={{ height: top }}>
        <ScreenHeader />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Авторизируйтесь</Text>
        <View style={styles.loginButtonsContainer}>
          <TextFieldWithTitle
            name="username"
            control={control as unknown as Control<FieldValues>}
            placeholder="Почта"
            inputWrapperStyle={styles.inputContainer}
          />
          <TextFieldWithTitle
            name="password"
            control={control as unknown as Control<FieldValues>}
            placeholder="Пароль"
            secureTextEntry
            containerStyle={styles.inputContainer}
          />
          <ButtonDefault
            text="Auth"
            onPress={onSubmit}
            containerStyle={styles.authButtonContainer}
            textStyle={styles.authButtonText}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginPage;
