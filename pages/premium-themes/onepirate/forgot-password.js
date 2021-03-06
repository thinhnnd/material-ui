import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import AppTheme from 'docs/src/modules/components/AppTheme';
import ForgotPassword from 'docs/src/pages/premium-themes/onepirate/ForgotPassword';

function Page() {
  return (
    <AppTheme title="Onepirate theme - Material-UI" description="A onepirate theme">
      <ForgotPassword />
    </AppTheme>
  );
}

export default withRoot(Page);
