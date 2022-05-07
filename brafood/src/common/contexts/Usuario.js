import { createContext, useState } from 'react';

export const UsuarioContext = createContext(); // Cria o contexto
UsuarioContext.displayName = "Usuário"

export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState(''); // Dados vindo do login
  const [saldo, setSaldo] = useState(0);
  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        saldo,
        setSaldo
      }}
    >
      {children}
    </UsuarioContext.Provider> // Pronto para exportar
  )
}