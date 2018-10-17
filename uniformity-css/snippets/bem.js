import './actions.css'

class PrimaryButton extends React.Component {
  render () {
    const { children, ...btnProps } = this.props
    return <button className='actions__btn actions__btn-primary' {...btnProps}>{children}</button>
  }
}

class CancelButton extends React.Component {
  render () {
    const { children, ...btnProps } = this.props
    return <button className='actions__btn actions__btn-cancel' {...btnProps}>{children}</button>
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
