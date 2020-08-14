import { useState, useEffect } from "react"
import { Head } from "blitz"
import styled from "styled-components"
import Dashboard from "../components/Dashboard/Dashboard"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -8px;
`

const Home = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Javascript Framework</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </PageWrapper>
  )
}

export default Home
