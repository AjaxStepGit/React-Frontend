import React, {useState} from 'react'

type FormProps = {
    onSubmit: (formData: any) => void
}

export type FormState = {
    [key: string]: any
}


const Form:React.FC<FormProps> = ({onSubmit}) => {
    const [formData, setFormData] = useState<FormState>({})  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(formData)
    }

    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
            const {name, value } = event.target as HTMLInputElement
            setFormData((prevFormData) => ({...prevFormData, [name]:value}))    
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label style={{display:'block'}} htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' onChange={handleChange} />
                <label style={{display:'block'}} htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form