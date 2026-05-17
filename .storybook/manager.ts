import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
 import one from './one';
addons.setConfig({
  theme: one,
});