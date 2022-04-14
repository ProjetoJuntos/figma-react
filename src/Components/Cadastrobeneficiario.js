import React from 'react'
import './Cadastrobeneficiario.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Cadastrobeneficiario () {
    return (
	<div className='Cadastrobeneficiario_Cadastrobeneficiario'>
		<span className='Desejoreceber'>Desejo receber :</span>
		<span className='Roupa'>Roupa</span>
		<span className='Alimento'>Alimento </span>
		<div className='Rectangle23'/>
		<Link to='/beneficiario'>
			<div className='btncadastrodoao'>
				<div className='Rectangle15'/>
				<span className='Cadastrar'>Cadastrar</span>
			</div>
		</Link>
		<img className='Rectangle16' src = {ImgAsset.Cadastrobeneficiario_Rectangle16} />
		<span className='Nome'>Nome</span>
		<img className='Rectangle24' src = {ImgAsset.Cadastrobeneficiario_Rectangle24} />
		<span className='DocumentoCPFCNPJ'>Documento - (CPF/CNPJ)</span>
		<img className='Rectangle26' src = {ImgAsset.Cadastrobeneficiario_Rectangle26} />
		<span className='Telefone'>Telefone</span>
		<img className='Rectangle27' src = {ImgAsset.Cadastrobeneficiario_Rectangle27} />
		<span className='DatadeNascimento'>Data de Nascimento</span>
		<img className='Rectangle25' src = {ImgAsset.Cadastrobeneficiario_Rectangle25} />
		<span className='Endereo'>Endereço</span>
		<div className='check_box'>
			<img className='Vector' src = {ImgAsset.Cadastrobeneficiario_Vector} />
			<img className='Vector_1' src = {ImgAsset.Cadastrobeneficiario_Vector_1} />
		</div>
		<div className='check_box_1'>
			<img className='Vector_2' src = {ImgAsset.Cadastrobeneficiario_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.Cadastrobeneficiario_Vector_3} />
		</div>
		<div className='check_box_2'>
			<img className='Vector_4' src = {ImgAsset.Cadastrobeneficiario_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.Cadastrobeneficiario_Vector_5} />
		</div>
		<span className='CADASTROBENEFICIRIO'>CADASTRO BENEFICIÁRIO</span>
		<img className='Juntos3' src = {ImgAsset.Doadores_Juntos1} />
		<div className='linha'>
			<div className='Rectangle24_1'/>
			<div className='Rectangle25_1'/>
		</div>
		<Link to='/voluntrios'>
			<span className='Voluntrios'>Voluntários</span>
		</Link>
		<Link to='/beneficiario'>
			<span className='Beneficirios'>Beneficiários</span>
		</Link>
		<Link to='/doadores'>
			<span className='Configuraes'>Doadores</span>
		</Link>
		<Link to='/undefined'>
			<span className='SAIR'>SAIR</span>
		</Link>
		<Link to='/doaes'>
			<span className='Doaes'>Doações</span>
		</Link>
		<img className='Vector_6' src = {ImgAsset.Cadastrobeneficiario_Vector_6} />
		<Link to='/incioestatistica'>
			<span className='Doaes_1'>INÍCIO</span>
		</Link>
	</div>
	)
}