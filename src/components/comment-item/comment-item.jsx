import React from 'react'
import PropTypes from 'prop-types'
import './commentItem.css'

class CommentItem extends React.Component {
  constructor (props) {
    super(props)
    this.deleteComment = this.deleteComment.bind(this)
  }

  deleteComment () {
    let username = this.props.comment.username
    if (window.confirm(`Are you sure to delete ${username} 's comments?`)) {
      this.props.delete(this.props.index)
    }
  }

  render () {
    let comment = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:" onClick={this.deleteComment}>delete</a>
        </div>
        <p className="user"><span >{comment.username}</span><span> &nbsp; comments:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired
}

export default CommentItem
