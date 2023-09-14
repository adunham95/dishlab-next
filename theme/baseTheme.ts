import type { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    white: "#fff",
    brandPrimary: {
      '50': '#eefff0',
      '100': '#d8ffdf',
      '200': '#b8ffc4',
      '300': '#78fd90',
      '400': '#36f259',
      '500': '#0cdb33',
      '600': '#03b625',
      '700': '#078e21',
      '800': '#0b701f',
      '900': '#0c5b1d',
      '950': '#00330c',
    },
    brandSecondary: {
      '50': '#f4f8f9',
      '100': '#ebf2f4',
      '200': '#dae7eb',
      '300': '#c3d8de',
      '400': '#aac4cf',
      '500': '#94afc0',
      '600': '#7d97ae',
      '700': '#61778b',
      '800': '#586b7b',
      '900': '#4b5964',
      '950': '#2c333a',
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'brandPrimary.500',
      ':hover':{
        bg: 'brandPrimary.600',
        cursor: 'pointer'
      },
      ':active': {
        bg: 'brandPrimary.700',
      },
      ':disabled':{
        bg: 'brandPrimary.200',
        color: 'brandPrimary.700'
      }
    },
    primaryOutline: {
      color: 'brandPrimary.700',
      bg: 'white',
      borderColor: 'brandPrimary.700',
      ':hover': {
        bg: 'brandPrimary.50',
        cursor: 'pointer'
      },
      ':active':{
        bg: 'brandPrimary.100'
      },
      ':disabled':{
        color: 'brandPrimary.600',
        borderColor: 'brandPrimary.600',
      }
    },
    secondary: {
      color: 'white',
      bg: 'brandSecondary.500',
      ':hover':{
        bg: 'brandSecondary.600',
        cursor: 'pointer'
      },
      ':active': {
        bg: 'brandSecondary.700',
      },
      ':disabled':{
        bg: 'brandSecondary.200',
        color: 'brandSecondary.700'
      }
    },
    secondaryOutline: {
      color: 'brandSecondary.700',
      bg: 'white',
      borderColor: 'brandSecondary.700',
      ':hover': {
        bg: 'brandSecondary.50',
        cursor: 'pointer'
      },
      ':active':{
        bg: 'brandSecondary.100'
      },
      ':disabled':{
        color: 'brandSecondary.600',
        borderColor: 'brandSecondary.600',
      }
    }
  },
})

export type ExactTheme = typeof theme
export default theme