import React from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'
import './commentList.css'


class CommentList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let comments = this.props.comments
    let display = comments.length > 0 ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">Reply comment:</h3>
        <h2 style={{ display: display }}>No comments currently. Please add comments in the left!!!</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => {
              console.log(comment)
              return <CommentItem comment={comment} key={index} index={index} delete={this.props.deleteCom}/>
            })
          }
        </ul>
      </div>
    )
  }
}
CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    deleteCom: PropTypes.func.isRequired
}

export default CommentList