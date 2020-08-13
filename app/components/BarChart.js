import { BarChart as BarReChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Label } from "recharts"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 4px solid #00a9a5;
  border-radius: 4px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const FrameworkColors = ["#00d8ff", "#b52e31", "#42b883", "#f23819"]

const BarChart = ({ title, data, width, height, dataKey }) => {
  let captializeDataKey = dataKey.charAt(0).toUpperCase() + dataKey.slice(1)
  return (
    <Container>
      <Title>{title}</Title>
      <BarReChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: captializeDataKey, angle: -90, position: "insideLeft" }} />
        <Bar dataKey={dataKey} fill="#8884d8">
          {data.map((entry, index) => {
            const color = FrameworkColors[index]
            return <Cell fill={color} />
          })}
        </Bar>
      </BarReChart>
    </Container>
  )
}

export default BarChart
