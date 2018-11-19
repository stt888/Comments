import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'
import {add, deleteCom, getCommentAsy} from '../../redux/actions'

class App extends React.Component {
  static propTypes = {
      comments: PropTypes.array.isRequired,
      add: PropTypes.func.isRequired,
      deleteCom: PropTypes.func.isRequired,
      getCommentAsy: PropTypes.func.isRequired
  }

  componentDidMount () {
      this.props.getCommentAsy()
  }

  render () {
    const {comments, add, deleteCom} = this.props

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>Please make comment for React</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={add}/>
          <CommentList comments={comments} deleteCom={deleteCom}/>
        </div>
      </div>
    )
  }
}

export default connect(
   state => ({comments: state}),
   {add, deleteCom, getCommentAsy}
)(App)