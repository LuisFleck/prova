
const userData = [
    {
        id: 1,
        name: 'teste',
        category: 'bibliotecario',
        email: 'teste@teste.com',
        password: '12340'
    },
    {
        id: 2,
        name: 'testovaldo',
        category: 'bibliotecario',
        email: 'testovaldo@teste.com',
        password: '67890'
    },
    {
        id: 4,
        name: 'testinha',
        category: 'leitor',
        email: 'testinha@teste.com',
        password: '67890'
    },
    {
        id: 3,
        name: 'testezinho',
        category: 'leitor',
        email: 'testezinho@teste.com',
        password: '67890'
    ,}

]

export const validateUser = (data) => {

    const user = userData.find(u => u.email === data.email && u.password === data.password)

    if(user)
        return { user }
    
    return {
        error: 'USUARIO não cadastrado ou SENHA não confere'
    }
    
}

