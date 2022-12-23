import React from 'react';
import {
  Text,
  StyleSheet,
} from '@andfaulkner/react-pdf-renderer-react17support';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
