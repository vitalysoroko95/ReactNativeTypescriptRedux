import { MessageOptions, showMessage } from 'react-native-flash-message';

export const flashMessage = ({
    message,
    description,
    type,
  }: MessageOptions): void => {
    showMessage({
      message: message,
      description: description,
      type: type,
      duration: 1800,
    });
  };