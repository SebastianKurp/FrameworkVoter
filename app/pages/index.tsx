import { useState, useEffect } from "react"
import { Head } from "blitz"
import styled from "styled-components"
import axios from "axios"
import BarChart from "../components/BarChart"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -8px;
`

const PageTitle = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: #00a9a5;
  text-align: center;
`

const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background-color: #4e8098;
`

const fakeData = [
  {
    name: "React",
    stars: 100,
  },
  {
    name: "Angular",
    stars: 200,
  },
  {
    name: "Vue",
    stars: 300,
  },
  {
    name: "Ember",
    stars: 400,
  },
]

const Home = () => {
  const [data, setData] = useState(fakeData)

  const fetchData = async () => {
    const respReact = await axios(`https://api.github.com/repos/facebook/react`)
    const respAngular = await axios(`https://api.github.com/repos/Angular/angular.js`)
    const respEmber = await axios(`https://api.github.com/repos/emberjs/ember.js`)
    const respVue = await axios(`https://api.github.com/repos/vuejs/vue`)
    const dashboardData = [
      {
        name: "React",
        watchers: respReact.data.watchers_count,
        stars: respReact.data.stargazers_count,
        forks: respReact.data.forks_count,
        issues: respReact.data.open_issues_count,
      },
      {
        name: "Angular",
        watchers: respAngular.data.watchers_count,
        stars: respAngular.data.stargazers_count,
        forks: respAngular.data.forks_count,
        issues: respAngular.data.open_issues_count,
      },
      {
        name: "Vue",
        watchers: respVue.data.watchers_count,
        stars: respVue.data.stargazers_count,
        forks: respVue.data.forks_count,
        issues: respVue.data.open_issues_count,
      },
      {
        name: "Ember",
        watchers: respEmber.data.watchers_count,
        stars: respEmber.data.stargazers_count,
        forks: respEmber.data.forks_count,
        issues: respEmber.data.open_issues_count,
      },
    ]
    setData(dashboardData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  let width = 400
  let height = 300

  return (
    <PageWrapper>
      <Head>
        <title>Javascript Framework</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <PageTitle>Javascript Framework Stats</PageTitle> */}
      <Dashboard>
        <BarChart title="Star Count" data={data} width={width} height={height} dataKey="stars" />
      </Dashboard>
    </PageWrapper>
  )
}

export default Home
