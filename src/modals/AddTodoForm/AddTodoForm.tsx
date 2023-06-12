import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import { TextFieldWithTitle } from 'components/TextFieldWithTitle';
import { ButtonDefault } from 'components/ButtonDefault';
import { Control, FieldValues } from 'react-hook-form';
import { Icons } from 'assets/icons';

const AddTodoForm = ({
  visible,
  control,
  onClose,
  onSubmit,
  isNameAndEmailDisabled,
}: TAddTodoForm) => {
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.addTodoTitle}>Введите данные</Text>
        <TouchableOpacity style={styles.closeIconButton} onPress={onClose}>
          <Icons.CloseIcon width={28} height={28} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.inputContainer}>
          <TextFieldWithTitle
            control={control}
            name="username"
            title="Имя"
            disabled={isNameAndEmailDisabled}
          />
          <TextFieldWithTitle
            control={control}
            name="email"
            title="Почта"
            disabled={isNameAndEmailDisabled}
          />
          <TextFieldWithTitle
            control={control}
            isMultiline
            name="text"
            title="Текст задачи"
            inputWrapperStyle={styles.requestInputWrapper}
            containerStyle={styles.requestInputContainer}
            titleStyle={styles.requestInputTitle}
            inputStyle={styles.requestInput}
          />
          <ButtonDefault
            text="Отправить"
            onPress={onSubmit}
            containerStyle={styles.sendButtonContainer}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

type TAddTodoForm = {
  visible: boolean;
  control: Control<FieldValues>;
  onClose: () => void;
  onSubmit: () => void;
  isNameAndEmailDisabled?: boolean;
};

export default AddTodoForm;
