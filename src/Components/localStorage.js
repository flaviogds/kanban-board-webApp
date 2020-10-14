export const setItem = (key, value) => localStorage.setItem(key, value); //para criar um do par chave: valor;

export const getItem = (key, value) => localStorage.getItem(key, value); //para recuperar o valor do par chave: valor;

export const removeItem = (key, value) => localStorage.removeItem(key, value); //para remover um par específico;

export const clearStorage = () => localStorage.clear();