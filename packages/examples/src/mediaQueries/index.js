import React from 'react';
import {
  Document,
  Page,
  View,
  StyleSheet,
} from '@andfaulkner/react-pdf-renderer-react17support';

const styles = StyleSheet.create({
  body: {
    padding: 35,
  },
  content: {
    padding: 20,
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    '@media min-width: 400': {
      flexDirection: 'row',
    },
  },
  block: {
    height: 150,
    width: 150,
    backgroundColor: 'red',
  },
});

const MediaComponent = () => (
  <View style={styles.content}>
    <View style={[styles.block, { backgroundColor: 'red' }]} />
    <View style={[styles.block, { backgroundColor: 'green' }]} />
  </View>
);

export default () => (
  <Document>
    <Page style={styles.body} size={[500, 600]}>
      <MediaComponent />
    </Page>
    <Page style={styles.body} size={[300, 600]}>
      <MediaComponent />
    </Page>
  </Document>
);
