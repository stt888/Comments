import React from 'react'
import PropTypes from 'prop-types'

class CommentAdd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
    this.addComment = this.addComment.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeContent = this.changeContent.bind(this)
  }

  addComment () {
    // create comment object according to the value input
    let { username, content } = this.state
    let comment = { username, content }
    // add to comments and update state
    this.props.add(comment)
    // empty input data
    this.setState({
      username: '',
      content: ''
    })
  }

  changeUsername (event) {
    this.setState({
      username: event.target.value
    })
  }

  changeContent (event) {
    this.setState({
      content: event.target.value
    })
  }

  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" placeholder="User Name"
                   value={this.state.username} onChange={this.changeUsername}/>
          </div>
          <div className="form-group">
            <label>Comment Content</label>
            <textarea className="form-control" rows="6" placeholder="Comment Content"
    value={this.state.content} onChange={this.changeContent}/>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
CommentAdd.propTypes = {
  add: PropTypes.func.isRequired
}

export default CommentAdd