import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import InfoDashboardCard from "./InfoDashboardCard"
import BarChart from "../BarChart"

const DashboardPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  background-color: #4e8098;
  position: relative;
`

const DashboardSpacer = styled.div`
  margin-top: 9px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
`

const ErrorMsg = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  top: 0;
  position: absolute;
  z-index: 20
  background-color: red;
  width: 100%;
  background-color:#EF5350;
`

const ErrorMessage = () => {
  return <ErrorMsg>Error: Github API Limit Reached!</ErrorMsg>
}

const Dashboard = () => {
  const [data, setData] = useState([{}])
  const [showErrorMsg, setShowErrorMsg] = useState(false)

  const fetchData = async () => {
    const respReact = await axios(`https://api.github.com/repos/facebook/react`).catch(() =>
      setShowErrorMsg(true)
    )
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
    <DashboardPanel>
      {showErrorMsg ? <ErrorMessage /> : null}
      <DashboardSpacer>
        <InfoDashboardCard width={width} height={height} fetchData={fetchData} />
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
    </DashboardPanel>
  )
}

export default Dashboard
