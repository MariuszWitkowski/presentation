import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #000;
  padding: 5px 10px;
`

const PrimaryButton = styled(Button)`
  background: #47c4ff;
`

const CancelButton = styled(Button)`
  background: #b5b5b5;
  color: #fff;
`

class Actions extends React.Component {
  clickMe = () => {}

  render () {
    return (
      <Fragment>
        <PrimaryButton onClick={this.clickMe}/>
        <CancelButton onClick={this.clickMe}/>
      </Fragment>
    )
  }
}
