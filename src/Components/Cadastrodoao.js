import React from 'react'
import './Cadastrodoao.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Cadastrodoao () {
    return (
	<div className='Cadastrodoao_Cadastrodoao'>
		<div className='Rectangle23'/>
		<Link to='/doaes'>
			<div className='btncadastrodoao'>
				<div className='Rectangle15'/>
				<span className='Cadastrar'>Cadastrar</span>
			</div>
		</Link>
		<span className='Tipodadoao'>Tipo da doação:</span>
		<span className='Doador'>Doador</span>
		<div className='Rectangle21'/>
		<div className='Rectangle20'/>
		<span className='Descrio'>Descrição:</span>
		<span className='Roupa'>Roupa</span>
		<span className='Alimento'>Alimento</span>
		<img className='Vector' src = {ImgAsset.Cadastrodoao_Vector} />
		<img className='Juntos4' src = {ImgAsset.Doadores_Juntos1} />
		<div className='linha'>
			<div className='Rectangle24'/>
			<div className='Rectangle25'/>
		</div>
		<span className='Voluntrios'>Voluntários</span>
		<div className='Select'>
			<span className='Select_1'>Selecionar doador</span>
			<div className='PhosphorIconsCaretDown'>
				<img className='VectorStroke' src = {ImgAsset.Cadastrodoao_VectorStroke} />
			</div>
		</div>
		<span className='Beneficirios'>Beneficiários</span>
		<span className='Configuraes'>Doadores</span>
		<span className='SAIR'>SAIR</span>
		<span className='Doaes'>Doações</span>
		<img className='Vector_1' src = {ImgAsset.Cadastrodoao_Vector_1} />
		<span className='Doaes_1'>INÍCIO</span>
		<span className='InserirFoto'>Inserir Foto</span>
		<img className='Vector_2' src = {ImgAsset.Cadastrodoao_Vector_2} />
		<img className='Vector_3' src = {ImgAsset.Cadastrodoao_Vector_3} />
		<div className='Textarea'>
			<span className='Label'></span>
			<div className='Textareafocused'>
				<span className='placeholder'>Digite aqui..</span>
				<div className='resize'>
					<div className='Line1'/>
					<div className='Line2'/>
				</div>
			</div>
			<div className='Frame2'>
				<span className='Helpertext'>Número de caracteres</span>
				<span className='_0100'>0/100</span>
			</div>
		</div>
		<div className='ictwotonephotocamerafront'>
			<img className='Vector_4' src = {ImgAsset.Cadastrodoao_Vector_4} />
		</div>
	</div>
	)
}