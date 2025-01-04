export const fetchAllUsers = async () => {
    try {
        const response = await fetch("/api/mysql/users");
        const result = await response.json();
        if (!response.ok) {
            console.log('erro ao buscar o banco de dados')
        }
        return result;
    } catch (erro) {
        console.log("não foi possível pegar os usuários");
    }
}

export const fetchAllFoods = async () => {
    try {
        const response = await fetch("/api/mysql/foods");
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados");
        }
        const result = await response.json();
        return result;
    } catch (erro) {
        console.log("não foi possível pegar as comidas", erro);
        return [];
    }
}

export const fetchAllStores = async () => {
    try {
        const response = await fetch("/api/mysql/stores");
        const result = await response.json();
        return result;
    } catch (erro) {
        console.log("não foi possível pegar as lojas");
    }
}