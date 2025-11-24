import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  color?: string
}

export const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
  disabled,
  style,
  color = '#0A84FF'
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center',
    },
    disabled: {
      backgroundColor: '#a0c8ff',
    },
    pressed: {
      opacity: 0.85,
    },
    text: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: 16,
    },
  });

  return (
      <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.button,
      disabled && styles.disabled,
      pressed && !disabled && styles.pressed,
      style,
    ]}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
  )

}

