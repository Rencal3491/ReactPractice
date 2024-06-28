// input 상태 관리

import React, { ChangeEvent, FormEvent, useState } from 'react';
type MyFormProps = {
    onSubmit: (form: { name: string, description: string }) => void  
}

function MyForm( { onSubmit }: MyFormProps ) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    })
    const { name, description } = form;

    const onChange = (e: ChangeEvent<HTMLInputElement>  ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        })
    };
    return (
        <form onSubmit={ handleSubmit}>
            <input type="name" value={name} onChange={onChange} /> <br></br>
            <input type="description" value={description} onChange={onChange} />
            <button type="submit" >등록</button>
        </form>
    );
}

export default MyForm;
