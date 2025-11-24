import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';

import { Layout } from '../components/Layout';
import { PrimaryButton } from '../components/PrimaryButton';
import { useNewsStore } from '../store/newsStore';
import { colors, typography } from '../theme';
import { ArrowBackIcon } from '../components/icons/ArrowLeft';

const CreateNewsScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [url, setURl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { addNews } = useNewsStore();

  const disabled =
    submitting || title.trim().length === 0 || text.trim().length === 0;

  const handleSubmit = async () => {
    if (disabled) return;
    try {
      setSubmitting(true);
      await addNews(title.trim(), text.trim(), url.trim());
      navigation.goBack();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.fab}>
            <ArrowBackIcon stroke="#6D6F73" />
          </Pressable>
          <View style={styles.titleHeader}>
            <Text style={typography.h2}>New Post</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={typography.bodySmall}
              value={title}
              onChangeText={setTitle}
              placeholder="Title*"
              placeholderTextColor={colors.secondary}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={typography.bodySmall}
              value={url}
              onChangeText={setURl}
              placeholder="Image url"
              placeholderTextColor={colors.secondary}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[typography.bodySmall, styles.textarea]}
              value={text}
              onChangeText={setText}
              placeholder="Type your message here ..*"
              placeholderTextColor={colors.secondary}
              multiline
              textAlignVertical="top"
            />
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton
              title="Public"
              onPress={handleSubmit}
              disabled={disabled}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeader: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    gap: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 9,
    backgroundColor: colors.secondaryLight,
  },
  bodyBlock: {
    marginTop: 16,
    flex: 1,
  },
  textarea: {
    minHeight: 150,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  fab: {
    width: 45,
    height: 45,
    borderRadius: 28,
    backgroundColor: colors.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateNewsScreen;
