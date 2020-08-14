import { useState } from "react"
import Select from "react-select"
import styled from "styled-components"
import { CircleLoader } from "react-spinners"
import createVote from "app/votes/mutations/createVote"

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
  padding: 13px;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  height: 38px;
  margin-right: 10px;
`
const MultiSelect = styled(Select)`
  width: 140px;
  margin-right: 10px;
`

const InfoDashboardCard = ({ width, height, fetchData }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [framework, setFramework] = useState()

  const options = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "ember", label: "Ember" },
    { value: "vue", label: "Vue" },
  ]

  const cardStyle = {
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    minHeight: `${height}px`,
  }

  return (
    <Card style={cardStyle}>
      <Title>Javascript Frameworks Data</Title>
      <Paragraph>
        A dashboard for seeing data from popular frontend Javascript libraries. Click Vote below to
        submit your choice for your favorite framework!
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
      <span>Vote For Your Favorite Framework</span>
      <Form
        onSubmit={async (event) => {
          event.preventDefault()
          try {
            await createVote({
              data: { email: email, choice: framework.value, browserSession: "" },
            })
            alert("Success!" + ` You Voted For ${framework.label}.`)
          } catch (error) {
            alert(error)
          }
        }}
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MultiSelect
          value={framework}
          placeholder="Framework"
          onChange={setFramework}
          options={options}
        />
        <button>Submit</button>
      </Form>
    </Card>
  )
}

export default InfoDashboardCard
