import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import myApi from '../../../service/service'
import './EditPost.css'

const EditPost = () => {
  const [question, setQuestion] = useState('')
  const [code_example, setCode_Example] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    myApi
      .getSpecificPost(params.postId)
      .then((res) => {
        setQuestion(res.data.question)
        setCode_Example(res.data.code_example)
      })
      .catch((e) => console.error(e))

  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const postToUpdate = { question, code_example }

    try {
      const updatedPost = await myApi.updatePost(params.postId, postToUpdate)
      if (updatedPost.status === 202) {
        navigate('/posts')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='edit-post'>
      <label htmlFor='question'>Question: </label>
        <textarea
          value={question}
          name="question"
          id="question"
          cols='30'
          rows='10'
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <label htmlFor="codeExample">Code Example: </label>
        <textarea
          value={code_example}
          name="coeExample"
          id="codeExample"
          cols="30" rows="10"
          onChange={(e) => setCode_Example(e.target.value)}>
        </textarea>
        <button className='button'>Update Post</button>
      </div>
    </form>
  )
}

export default EditPost