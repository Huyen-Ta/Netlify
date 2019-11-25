// @flow
import * as React from 'react'

type Props = {|
  children?: React.Node,
|}

// Component layout
const Layout = ({ children }: Props) => (
  <div className='layout'>
    <main className='main-layout'>{children}</main>
  </div>
)

export default Layout
