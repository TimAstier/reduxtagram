import Raven from 'raven-js';

const sentry_key = 'bb0a87b211bd4bb39eca8493bb4a9924';
const sentry_app = '125433';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
