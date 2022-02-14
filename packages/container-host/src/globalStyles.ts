import { createGlobalStyle } from 'styled-components'

/*
    createGlobalStyles replaces index.css.
    It's more flexible and consistent with our usage of styled components.
    Learn more about it here: https://www.styled-components.com/docs/api#createglobalstyle
*/

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    color: #303941;
    font-family: "Open Sans", serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #f1f2f4;
  }

  * {
    box-sizing: border-box;
  }

  div[data-test="text-field-wrapper"] {
    box-sizing: content-box;
  }

  div[data-test="text-field-wrapper"] + div {
    flex-direction: row;
  }

  .checkbox input:focus {
    clip: rect(0 0 0 0);
  }

  div.checkbox input:checked + div {
    border: 2px solid #014990 !important;
  }

  div.checkbox label > div:first-child {
    margin-left: 0;
  }

  /* TODO: remove after upgrading to v1.6.0 of SYF CL which adds outline to checkbox */
  div.checkbox label > div:first-child > input[type="checkbox"]:focus + div {
    outline: 1px solid #014990;
  }

  @media print {
    body * {
      visibility: hidden;
    }
  }
`
