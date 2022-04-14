import React from 'react'
import './CadastroDoador.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function CadastroDoador () {
    return (
	<div className='CadastroDoador_CadastroDoador'>
		<span className='CADASTRODOADOR'>CADASTRO DOADOR</span>
		<div className='Rectangle27'/>
		<Link to='/doadores'>
			<div className='btncadastrodoao'>
				<div className='Rectangle15'/>
				<span className='Cadastrar'>Cadastrar</span>
			</div>
		</Link>
		<span className='Nome'>Nome</span>
		<img className='Rectangle29' src = {ImgAsset.CadastroDoador_Rectangle29} />
		<img className='Rectangle32' src = {ImgAsset.CadastroDoador_Rectangle32} />
		<span className='DocumentoCPFCNPJ'>Documento - (CPF/CNPJ)</span>
		<img className='Rectangle30' src = {ImgAsset.CadastroDoador_Rectangle30} />
		<span className='Telefone'>Telefone</span>
		<span className='PessoaFsica'>Pessoa Física</span>
		<span className='PessoaJurdica'>Pessoa Jurídica</span>
		<img className='Rectangle31' src = {ImgAsset.CadastroDoador_Rectangle31} />
		<span className='Endereo'>Endereço</span>
		<div className='check_box'>
			<img className='Vector' src = {ImgAsset.CadastroDoador_Vector} />
			<img className='Vector_1' src = {ImgAsset.CadastroDoador_Vector_1} />
		</div>
		<img className='Vector_2' src = {ImgAsset.CadastroDoador_Vector_2} />
		<img className='Juntos2' src = {ImgAsset.Doadores_Juntos1} />
		<div className='linha'>
			<div className='Rectangle24'/>
			<div className='Rectangle25'/>
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
		<img className='Vector_3' src = {ImgAsset.CadastroDoador_Vector_3} />
		<Link to='/incioestatistica'>
			<span className='Doaes_1'>INÍCIO</span>
		</Link>
		<img className='Rectangle28' src = {ImgAsset.CadastroDoador_Rectangle28} />
		<span className='DatadeNascimento'>Data de Nascimento</span>
		<Link to='/perfilpic'>
			<div className='Group79'>
				<span className='InserirFoto'>Inserir Foto</span>
				<img className='Vector_4' src = {ImgAsset.CadastroDoador_Vector_4} />
				<div className='ictwotonephotocamerafront'>
					<img className='Vector_5' src = {ImgAsset.CadastroDoador_Vector_5} />
					<img className='Vector_6' src = {ImgAsset.CadastroDoador_Vector_6} />
				</div>
				<span className='InserirFoto_1'>Inserir Foto</span>
				<img className='Vector_7' src = {ImgAsset.CadastroDoador_Vector_7} />
				<div className='ictwotonephotocamerafront_1'>
					<img className='Vector_8' src = {ImgAsset.CadastroDoador_Vector_8} />
					<img className='Vector_9' src = {ImgAsset.CadastroDoador_Vector_9} />
				</div>
				<span className='InserirFoto_2'>Inserir Foto</span>
				<img className='Vector_10' src = {ImgAsset.CadastroDoador_Vector_10} />
				<div className='ictwotonephotocamerafront_2'>
					<img className='Vector_11' src = {ImgAsset.CadastroDoador_Vector_11} />
					<img className='Vector_12' src = {ImgAsset.CadastroDoador_Vector_12} />
				</div>
			</div>
		</Link>
	</div>
	)
}