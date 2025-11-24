import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../theme';
import { useNewsStore } from '../store/newsStore';
import { PrimaryButton } from '../components/PrimaryButton';

export const NewsActionsModalScreen = ({ navigation, route }: any) => {
  const { id } = route.params;
  const { removeNews } = useNewsStore();

  const handleDelete = async () => {
    await removeNews(id);
    navigation.goBack();
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <View style={styles.sheet}>
        <View style={styles.before} />
        <View style={styles.btnContainer}>
          <PrimaryButton
            title="Delete"
            onPress={handleDelete}
            color={colors.danger}
          />
          <PrimaryButton
            title="Close"
            onPress={handleClose}
            color={colors.primaryBlue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000066',
  },
  sheet: {
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#ffffff',
  },
  before: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginBottom: 8,
  },
  btnContainer: {
    marginBottom: 30,
    gap: 20,
  },
  action: {
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.8,
  },
  actionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  deleteText: {
    color: colors.danger,
    fontWeight: '600',
  },
  closeText: {
    color: colors.primaryBlue,
    fontWeight: '600',
  },
});
