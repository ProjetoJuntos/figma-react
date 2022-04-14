import React from 'react'
import './perfilpic.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Perfilpic () {
    return (
	<div className='perfilpic_perfilpic'>
		<Link to='/cadastrodoador'>
			<div className='InserirFoto'>
				<img className='_127799841' src = {ImgAsset.perfilpic__127799841} />
			</div>
		</Link>
	</div>
	)
}