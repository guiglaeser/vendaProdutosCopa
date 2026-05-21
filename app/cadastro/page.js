'use client'

import { use, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Cadastro() {
    const [userName, setUserName] = useState('');
    const [senha, setSenha] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        const {data, error} = await supabase
            .from('usuario')
            .insert([{usuario: userName, senha: senha, tipo: 'comum'}])

            if(error) {
                Swal.fire ({
                    title: 'Erro!',
                    text: error,
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: 'rgb(0, 160, 0)'
                })
            }else {
                Swal.fire ({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'Usuário cadastrado com sucesso.',
                    timer: 3000,
                    timerProgressBar: true,
                    confirmButtonColor: 'rgb(0, 160, 0)'
                })

                setUserName = '';
                setSenha = '';
            }
    }

    return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleEnviar}>
        <input 
          type="text" 
          placeholder="Nome de usuário" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required 
        /><br/><br/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )

}