import React from 'react'
import './Verdetalhes.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Verdetalhes () {
    return (
	<div className='Verdetalhes_Verdetalhes'>
		<span className='Verdoao'>Ver doação</span>
		<div className='Rectangle23'/>
		<div className='btncadastrodoao'>
			<div className='Rectangle15'/>
			<span className='Cadastrar'>Cadastrar</span>
		</div>
		<img className='Juntos4' src = {ImgAsset.Doadores_Juntos1} />
		<div className='linha'>
			<div className='Rectangle24'/>
			<div className='Rectangle25'/>
		</div>
		<span className='Voluntrios'>Voluntários</span>
		<span className='Beneficirios'>Beneficiários</span>
		<span className='Configuraes'>Doadores</span>
		<span className='SAIR'>SAIR</span>
		<span className='Doaes'>Doações</span>
		<img className='Vector' src = {ImgAsset.Verdetalhes_Vector} />
		<span className='Doaes_1'>INÍCIO</span>
	</div>
	)
}