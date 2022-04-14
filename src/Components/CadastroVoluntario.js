import React from 'react'
import './CadastroVoluntario.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function CadastroVoluntario () {
    return (
	<div className='CadastroVoluntario_CadastroVoluntario'>
		<span className='CADASTROVOLUNTRIO'>CADASTRO VOLUNTÁRIO</span>
		<span className='Tipodeveculo'>Tipo de veículo :</span>
		<span className='Carro'>Carro</span>
		<span className='MotoBicicleta'>Moto/Bicicleta </span>
		<span className='Outros'>Outros </span>
		<div className='Rectangle23'/>
		<Link to='/voluntrios'>
			<div className='btncadastrodoao'>
				<div className='Rectangle15'/>
				<span className='Cadastrar'>Cadastrar</span>
			</div>
		</Link>
		<img className='Rectangle16' src = {ImgAsset.CadastroVoluntario_Rectangle16} />
		<span className='Nome'>Nome</span>
		<img className='Rectangle24' src = {ImgAsset.CadastroVoluntario_Rectangle24} />
		<span className='DocumentoCPFCNPJ'>Documento - (CPF/CNPJ)</span>
		<img className='Rectangle26' src = {ImgAsset.CadastroVoluntario_Rectangle26} />
		<span className='Telefone'>Telefone</span>
		<img className='Rectangle27' src = {ImgAsset.CadastroVoluntario_Rectangle27} />
		<span className='DatadeNascimento'>Data de Nascimento</span>
		<img className='Rectangle25' src = {ImgAsset.CadastroVoluntario_Rectangle25} />
		<span className='Endereo'>Endereço</span>
		<div className='check_box'>
			<img className='Vector' src = {ImgAsset.CadastroVoluntario_Vector} />
			<img className='Vector_1' src = {ImgAsset.CadastroVoluntario_Vector_1} />
		</div>
		<div className='check_box_1'>
			<img className='Vector_2' src = {ImgAsset.CadastroVoluntario_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.CadastroVoluntario_Vector_3} />
		</div>
		<div className='check_box_2'>
			<img className='Vector_4' src = {ImgAsset.CadastroVoluntario_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.CadastroVoluntario_Vector_5} />
		</div>
		<div className='check_box_3'>
			<img className='Vector_6' src = {ImgAsset.CadastroVoluntario_Vector_6} />
			<img className='Vector_7' src = {ImgAsset.CadastroVoluntario_Vector_7} />
		</div>
		<div className='check_box_4'>
			<img className='Vector_8' src = {ImgAsset.CadastroVoluntario_Vector_8} />
			<img className='Vector_9' src = {ImgAsset.CadastroVoluntario_Vector_9} />
		</div>
		<div className='check_box_5'>
			<img className='Vector_10' src = {ImgAsset.CadastroVoluntario_Vector_10} />
			<img className='Vector_11' src = {ImgAsset.CadastroVoluntario_Vector_11} />
		</div>
		<div className='check_box_6'>
			<img className='Vector_12' src = {ImgAsset.CadastroVoluntario_Vector_12} />
			<img className='Vector_13' src = {ImgAsset.CadastroVoluntario_Vector_13} />
		</div>
		<span className='Possotransportar'>Posso transportar :</span>
		<span className='Roupa'>Roupa</span>
		<span className='Alimento'>Alimento </span>
		<div className='check_box_7'>
			<img className='Vector_14' src = {ImgAsset.CadastroVoluntario_Vector_14} />
			<img className='Vector_15' src = {ImgAsset.CadastroVoluntario_Vector_15} />
		</div>
		<div className='check_box_8'>
			<img className='Vector_16' src = {ImgAsset.CadastroVoluntario_Vector_16} />
			<img className='Vector_17' src = {ImgAsset.CadastroVoluntario_Vector_17} />
		</div>
		<div className='check_box_9'>
			<img className='Vector_18' src = {ImgAsset.CadastroVoluntario_Vector_18} />
			<img className='Vector_19' src = {ImgAsset.CadastroVoluntario_Vector_19} />
		</div>
		<img className='Juntos3' src = {ImgAsset.Doadores_Juntos1} />
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
		<img className='Vector_20' src = {ImgAsset.CadastroVoluntario_Vector_20} />
		<Link to='/incioestatistica'>
			<span className='Doaes_1'>INÍCIO</span>
		</Link>
		<span className='PessoaFsica'>Pessoa Física</span>
		<span className='PessoaJurdica'>Pessoa Jurídica</span>
		<div className='check_box_10'>
			<img className='Vector_21' src = {ImgAsset.CadastroVoluntario_Vector_21} />
			<img className='Vector_22' src = {ImgAsset.CadastroVoluntario_Vector_22} />
		</div>
		<img className='Vector_23' src = {ImgAsset.CadastroVoluntario_Vector_23} />
		<span className='InserirFoto'>Inserir Foto</span>
		<img className='Vector_24' src = {ImgAsset.CadastroVoluntario_Vector_24} />
		<div className='ictwotonephotocamerafront'>
			<img className='Vector_25' src = {ImgAsset.CadastroVoluntario_Vector_25} />
			<img className='Vector_26' src = {ImgAsset.CadastroVoluntario_Vector_26} />
		</div>
		<div className='linha'>
			<div className='Rectangle24_1'/>
			<div className='Rectangle25_1'/>
		</div>
	</div>
	)
}