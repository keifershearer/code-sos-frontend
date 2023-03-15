import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myApi from '../../../service/service'

const CreatePost = () => {
    const navigate = useNavigate()
    const [question, setQuestion] = useState('')
    const [code_example, setCode_Example] = useState('')
    const [owner, setOwner] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postToCreate = { question, code_example }
        setOwner()
        try {
            const response = await myApi.createPost(postToCreate)
            if (response.status === 201) {
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Question: </label>
                <textarea value={question}
                    name="question"
                    id="question"
                    cols="30"
                    rows="10"
                    onChange={(e) => { setQuestion(e.target.value) }} />
            </div>
            <div>
                <textarea value={code_example}
                    name="code_example"
                    id="code_example"
                    cols="30"
                    rows="10"
                    onChange={(e) => { setCode_Example(e.target.value) }} />

            </div>
            <button>Submit</button>
        </form>
    )
}

export default CreatePost