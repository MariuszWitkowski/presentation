import './btn.css'

class PrimaryButton extends React.Component {
  render () {
    const { children, ...btnProps } = this.props
    return <button className='btn btn-primary' {...btnProps}>{children}</button>
  }
}

class CancelButton extends React.Component {
  render () {
    const { children, ...btnProps } = this.props
    return <button className='btn btn-cancel' {...btnProps}>{children}</button>
  }
}

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
