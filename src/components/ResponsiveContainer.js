import PropTypes from 'prop-types'
import React from 'react'
import DesktopContainer from '../components/DesktopContainer'
import MobileContainer from '../components/MobileContainer'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

export default ResponsiveContainer
