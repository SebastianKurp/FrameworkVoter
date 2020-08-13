import { useState, useEffect } from "react"
import { Head } from "blitz"
import styled from "styled-components"
import axios from "axios"
import { CircleLoader } from "react-spinners"
import BarChart from "../components/BarChart"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -8px;
`

const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  background-color: #4e8098;
`

const DashboardSpacer = styled.div`
  margin-top: 9px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
`

const DashboardCard = ({ width, height, fetchData }) => {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffffff;
    border: 4px solid #00a9a5;
    border-radius: 4px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    min-width: ${width}px;
    max-width: ${width}px;
    min-height: ${height}px;
    padding: 13px;
  `

  const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
  `

  const Paragraph = styled.p`
    font-size: 16px;
    text-align: center;
  `

  const Button = styled.button`
    background: #4e8098;
    border: 2px solid #556699;
    border-radius: 11px;
    box-shadow: 0 1px #444444;
    padding: 13px 33px;
    color: #ffffff;
    display: inline-block;
    font: normal bold 21px/1 "Open Sans", sans-serif;
    text-align: center;
    cursor: pointer;
    min-width: 200px;
    &:hover {
      opacity: 80%;
    }
  `

  const [loading, setLoading] = useState(false)

  return (
    <Card>
      <Title>Javascript Frameworks Data</Title>
      <Paragraph>
        A dashboard for seeing data from popular frontend Javascript libraries. Click Vote below to
        submit your choice for your favourite framework!
      </Paragraph>
      {loading ? (
        <Button>
          <CircleLoader size={25} />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLoading(true)
            fetchData().then(() => setLoading(false))
          }}
        >
          Refresh Data
        </Button>
      )}
    </Card>
  )
}

const Home = () => {
  const [data, setData] = useState([{}])

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
      <Dashboard>
        <DashboardSpacer>
          <DashboardCard width={width} height={height} fetchData={fetchData} />
        </DashboardSpacer>
        <DashboardSpacer>
          <BarChart title="Star Count" data={data} width={width} height={height} dataKey="stars" />
        </DashboardSpacer>
        <DashboardSpacer>
          <BarChart title="Forks" data={data} width={width} height={height} dataKey="forks" />
        </DashboardSpacer>
        <DashboardSpacer>
          <BarChart title="Watchers" data={data} width={width} height={height} dataKey="watchers" />
        </DashboardSpacer>
        <DashboardSpacer>
          <BarChart
            title="Opened Issues"
            data={data}
            width={width}
            height={height}
            dataKey="issues"
          />
        </DashboardSpacer>
      </Dashboard>
    </PageWrapper>
  )
}

export default Home
