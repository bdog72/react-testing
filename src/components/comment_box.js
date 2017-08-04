import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
  constructor (props) {
    super()

    this.state = {
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  handleChange (event) {
    this.setState({ comment: event.target.value })
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='comment-box'>
        <h4>Add A Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />

        <div>
          <button action='submit'>Submit comment</button>
        </div>

      </form>
    )
  }
}
export default connect(null, actions)(CommentBox)
