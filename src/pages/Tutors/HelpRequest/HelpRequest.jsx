import React, { useState } from 'react'
import myApi from '../../../service/service'
import { useNavigate, useParams } from 'react-router-dom'

function HelpRequest() {
    const [question, setQuestion] = useState('')

    const navigate = useNavigate()
    const params = useParams()


    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const tutor = params.profileId

            const response = await myApi.helpRequest({ question }, tutor)
            if (response.status === 201) {
                navigate('/tutors')
            }
        } catch (error) {
            console.error(error)
        }

    }

    return (

        <section className="help-request-section">

            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Request help</label>
                <textarea value={question} name="question" id="question" onChange={(e) => setQuestion(e.target.value)} />
                <button>ask help</button>
            </form>

        </section>
    )
}

export default HelpRequest