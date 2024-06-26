const path = require('path')
const { styles, theme } = require('./styleguide.styles')
module.exports = {
  title: 'UNICEF Material UI',
  styles,
  theme,
  showUsage: true,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]

    return `import { ${name} } from '@unicef/material-ui'`
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  sections: [
    {
      name: 'Introduction',
      sections: [
        {
          name: '',
          content: 'src/docs/Introduction.md',
        },
        {
          name: 'Installation',
          content: 'src/docs/Installation.md',
        },
        {
          name: 'Example',
          external: true,
          href: 'https://unicef.github.io/unicef-material-ui/example',
        },
      ],
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/components/UButton', 'UButton.js'),
        path.resolve(
          __dirname,
          'src/components/UConfirmationButton',
          'UConfirmationButton.js'
        ),
        path.resolve(
          __dirname,
          'src/components/URadioButtons',
          'URadioButtons.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UPageLoadingProgress',
          'UPageLoadingProgress.js'
        ),
        path.resolve(__dirname, 'src/components/UErrorAlert', 'UErrorAlert.js'),
        path.resolve(
          __dirname,
          'src/components/UInfiniteScroll',
          'UInfiniteScroll.js'
        ),
        path.resolve(__dirname, 'src/components/USearchBox', 'USearchBox.js'),
        path.resolve(
          __dirname,
          'src/components/UBreadcrumbs',
          'UBreadcrumbs.js'
        ),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Layout',
      components: () => [
        path.resolve(__dirname, 'src/components/ULayout', 'ULayout.js'),
        path.resolve(__dirname, 'src/components/USideBar', 'USideBar.js'),
        path.resolve(__dirname, 'src/components/UContent', 'UContent.js'),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Header',
      components: () => [
        path.resolve(__dirname, 'src/components/UHeader', 'UHeader.js'),
        path.resolve(
          __dirname,
          'src/components/UHeaderRightButtons',
          'UHeaderRightButtons.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UNavbarCenter',
          'UNavbarCenter.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UHeaderMainMenu',
          'UHeaderMainMenu.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UHeaderLeftMenu',
          'UHeaderLeftMenu.js'
        ),
        path.resolve(__dirname, 'src/components/UAsyncBadge', 'UAsyncBadge.js'),
        path.resolve(
          __dirname,
          'src/components/UAvatarImage',
          'UAvatarImage.js'
        ),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Pickers',
      components: () => [
        path.resolve(
          __dirname,
          'src/components/USelectPicker',
          'USelectPicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UPeoplePicker',
          'UPeoplePicker.js'
        ),
        path.resolve(__dirname, 'src/components/UIconPicker', 'UIconPicker.js'),
        path.resolve(__dirname, 'src/components/UDatePicker', 'UDatePicker.js'),
        path.resolve(
          __dirname,
          'src/components/UDesktopDatePicker',
          'UDesktopDatePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UMobileDatePicker',
          'UMobileDatePicker.js'
        ),
        path.resolve(__dirname, 'src/components/UTimePicker', 'UTimePicker.js'),
        path.resolve(
          __dirname,
          'src/components/UDesktopTimePicker',
          'UDesktopTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UMobileTimePicker',
          'UMobileTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UDateTimePicker',
          'UDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UDesktopDateTimePicker',
          'UDesktopDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UMobileDateTimePicker',
          'UMobileDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UAutoComplete',
          'UAutoComplete.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UGraphPeoplePicker',
          'UGraphPeoplePicker.js'
        ),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Form Validation',
      components: () => [
        path.resolve(
          __dirname,
          'src/components/UValidatorForm',
          'UValidatorForm.js'
        ),
        path.resolve(__dirname, 'src/components/UTextField', 'UTextField.js'),
        path.resolve(
          __dirname,
          'src/components/UValidatorComponent',
          'UValidatorComponent.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UPositiveInteger',
          'UPositiveInteger.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UCurrencyField',
          'UCurrencyField.js'
        ),
        path.resolve(
          __dirname,
          'src/components/UCoordinateField',
          'UCoordinateField.js'
        ),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Active Form',
      components: () => [
        path.resolve(
          __dirname,
          'src/components/ActiveAutoComplete',
          'ActiveAutoComplete.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveFormTextField',
          'ActiveFormTextField.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveCurrencyField',
          'ActiveCurrencyField.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveFormSelect',
          'ActiveFormSelect.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveFormPositiveInteger',
          'ActiveFormPositiveInteger.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveFormCoordinateField',
          'ActiveFormCoordinateField.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveDatePicker',
          'ActiveDatePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveDesktopDatePicker',
          'ActiveDesktopDatePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveMobileDatePicker',
          'ActiveMobileDatePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveDateTimePicker',
          'ActiveDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveDesktopDateTimePicker',
          'ActiveDesktopDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveMobileDateTimePicker',
          'ActiveMobileDateTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveTimePicker',
          'ActiveTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveDesktopTimePicker',
          'ActiveDesktopTimePicker.js'
        ),
        path.resolve(
          __dirname,
          'src/components/ActiveMobileTimePicker',
          'ActiveMobileTimePicker.js'
        ),
      ],
      usageMode: 'expand',
    },
    {
      name: 'Accessibility',
      components: () => [
        path.resolve(__dirname, 'src/components/UAriaLive', 'UAriaLive.js'),
        path.resolve(
          __dirname,
          'src/components/UAriaHiddenText',
          'UAriaHiddenText.js'
        ),
      ],
      usageMode: 'expand',
    },
    // For future reference to use in sections
    // {
    //   name: 'UI Components',
    //   // content: 'src/components/USelect/USelect.md',
    //   components: 'src/components/USelect/USelect.js',
    //   // exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //   usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    // },
  ],
}
