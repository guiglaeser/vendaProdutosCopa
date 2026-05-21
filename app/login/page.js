'use client';
import {useState} from 'react';
import { supabase } from '../../lib/supabase';
import Swal from 'sweetalert2';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();


        const {data, error} = await supabase
        .from('usuario')
        .select('*')
        .eq('usuario', userName)
        .eq('senha', senha)
        .single()

        if(error || !data) {
            Swal.fire({
                icon: 'error',
                title: 'Falha no Login',
                text: 'Usuário ou senha incorretos. Tente novamente.',
                confirmButtonColor: '#d33'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Bem-vindo de volta!',
                text: `Login efetuado com sucesso como ${data.tipo}.`,
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            })
        }

        return (
            <div style={estiloContainer}>
            <div style={estiloCard}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Acessar o Sistema</h2>
                
                <form onSubmit={handleLogin}>
                <div style={estiloInputGrupo}>
                    <label>Usuário</label>
                    <input 
                    type="text" 
                    style={estiloInput}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    />
                </div>

                <div style={estiloInputGrupo}>
                    <label>Senha</label>
                    <input 
                    type="password" 
                    style={estiloInput}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required 
                    />
                </div>

                <button type="submit" style={estiloBotao}>Entrar</button>
                </form>
            </div>
            </div>
        )
    }

    const estiloContainer = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'sans-serif' };
    const estiloCard = { backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '320px' };
    const estiloInputGrupo = { display: 'flex', flexDirection: 'col', marginBottom: '15px' };
    const estiloInput = { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px', fontSize: '16px' };
    const estiloBotao = { width: '100%', padding: '12px', backgroundColor: '#3085d6', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' };

}