import { useState } from "react"

export default function Form({movieSearch}) {
    const [formData, setFormData] = useState({
        searchTerm: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(formData.searchTerm);
        setFormData({
            ...formData,
            searchTerm: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='searchTerm' value={formData.searchTerm} onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}