import { StyleSheet } from 'react-native';

export const cardStyle = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flex: 1,
    border: '1px solid #E2E2E2',
    paddingHorizontal: '16px',
    paddingVertical: '32px',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.46,
    shadowRadius: -1,
    shadowColor: '#000',
  },
});
