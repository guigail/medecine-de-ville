import React from 'react'
import { AbsoluteFragment, Fragment } from 'redux-little-router'
import { Layout, Panel } from 'react-toolbox'
import Results from './Results'
import Appbar from './Appbar'
import Menu from './Menu'

const App = () => {
  return (
    <Layout>
      <Menu />
      <Panel>
        <Appbar />
        <AbsoluteFragment forRoute="/" children={<Results />} />
      </Panel>
    </Layout>
  )
}

export default App
