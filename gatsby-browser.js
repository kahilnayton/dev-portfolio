import "./src/styles/common.css"
import './src/styles/dark.css'
import './src/styles/common.css'

import "./src/fonts/fonts.css";

import 'lazysizes'

import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
