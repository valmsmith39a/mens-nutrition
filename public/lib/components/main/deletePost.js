import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/PostActions'

let DeletePost = ({ dispatch, id, index }) => {
  return (
    <button className='btn btn-default btn-xs' onClick={e => {
      e.preventDefault()
      dispatch(deletePost(id, index))
    }}>
      Delete
    </button>
  )
}

DeletePost = connect()(DeletePost)

export default DeletePost
