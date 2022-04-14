import React from 'react'
import './PrivateLogin.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function PrivateLogin () {
    return (
	<div className='PrivateLogin_PrivateLogin'>
		<div className='Rectangle14'/>
		<span className='Senha'>Senha</span>
		<img className='Juntos2' src = {ImgAsset.Doadores_Juntos1} />
		<span className='Faaseuloginparaacessarsuaconta'>Faça seu login para acessar sua conta</span>
		<span className='Esqueceuasenha'>Esqueceu a senha?</span>
		<div className='Rectangle17'>
			<div className='Rectangle17_1'/>
		</div>
		<div className='Rectangle16'>
			<span className='Nome'>Nome</span>
			<img className='Rectangle16_1' src = {ImgAsset.PrivateLogin_Rectangle16_1} />
		</div>
		<Link to='/incioestatistica'>
			<div className='btnlogin'>
				<div className='Rectangle15'/>
				<span className='Login'>Login</span>
			</div>
		</Link>
	</div>
	)
}