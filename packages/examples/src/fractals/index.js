import React from 'react';
import { Page, Document } from '@andfaulkner/react-pdf-renderer-react17support';

import Fractal from './Fractal';

export default () => (
  <Document
    title="Fractals"
    author="John Doe"
    subject="Rendering fractals with react-pdf"
    keywords={['react', 'pdf', 'fractals']}
  >
    <Page size="A4">
      <Fractal steps={18} />
    </Page>

    <Page orientation="landscape" size="A4">
      <Fractal steps={14} />
    </Page>

    <Page size="B4">
      <Fractal steps={10} />
    </Page>
  </Document>
);
