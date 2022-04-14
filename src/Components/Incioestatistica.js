import React from 'react'
import './Incioestatistica.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Incioestatistica () {
    return (
	<div className='Incioestatistica_Incioestatistica'>
		<div className='Group78'>
			<img className='Vector' src = {ImgAsset.Incioestatistica_Vector} />
		</div>
		<div className='iconparkrankinglist'>
			<div className='Group'>
				<img className='Vector_1' src = {ImgAsset.Incioestatistica_Vector_1} />
				<img className='Vector_2' src = {ImgAsset.Incioestatistica_Vector_2} />
			</div>
		</div>
		<img className='Juntos1' src = {ImgAsset.Doadores_Juntos1} />
		<div className='Grid'>
		</div>
		<div className='linha'>
			<div className='Rectangle24'/>
			<div className='Rectangle25'/>
		</div>
		<Link to='/voluntrios'>
			<span className='Voluntrios'>Voluntários</span>
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
		<img className='Vector_3' src = {ImgAsset.Incioestatistica_Vector_3} />
		<span className='Doaes_1'>INÍCIO</span>
		<div className='Rectangle27'/>
		<Link to='/beneficiario'>
			<span className='Beneficirios'>Beneficiários</span>
		</Link>
		<div className='Alltickets'>
			<div className='tableticketpriorityhigh'>
				<div className='dividerlinehorizontal'>
					<img className='divider' src = {ImgAsset.Incioestatistica_divider} />
				</div>
				<div className='dividerlinehorizontal_1'>
					<img className='divider_1' src = {ImgAsset.Incioestatistica_divider_1} />
				</div>
			</div>
			<div className='cardsdefault'>
				<div className='sheet'/>
				<span className='Voluntrios_1'>Voluntários</span>
				<span className='Doadores'>Doadores</span>
				<div className='content'>
					<div className='iconmorevertical'>
						<img className='Vector_4' src = {ImgAsset.Incioestatistica_Vector_4} />
					</div>
					<span className='Ticketinformation'>10 daações</span>
					<span className='Ticketname'>Márcio Lopez Garcia</span>
					<div className='avatarman5'>
						<div className='Ellipse'/>
						<img className='m5' src = {ImgAsset.Doaes_m5} />
					</div>
				</div>
				<div className='tableticketpriorityhigh_1'>
					<div className='content_1'>
						<div className='iconmorevertical_1'>
							<img className='Vector_5' src = {ImgAsset.Incioestatistica_Vector_5} />
						</div>
						<span className='Ticketinformation_1'>23 doações</span>
						<span className='Ticketname_1'>ONG Ser Feliz</span>
						<div className='avatarwoman3'>
							<div className='Ellipse_1'/>
							<img className='w3' src = {ImgAsset.Incioestatistica_w3} />
						</div>
					</div>
					<div className='dividerlinehorizontal_2'>
						<img className='divider_2' src = {ImgAsset.Incioestatistica_divider_2} />
					</div>
					<div className='dividerlinehorizontal_3'>
						<img className='divider_3' src = {ImgAsset.Incioestatistica_divider_3} />
					</div>
					<span className='Ticketname_2'>ONG Todos Juntos</span>
				</div>
				<span className='Ticketname_3'>ONG Ser Feliz</span>
			</div>
			<div className='tableticketprioritylow'>
				<div className='content_2'>
					<div className='iconmorevertical_2'>
						<img className='Vector_6' src = {ImgAsset.Incioestatistica_Vector_6} />
					</div>
					<span className='Ticketinformation_2'>1 doação</span>
					<span className='Ticketname_4'>Mirian Caldeira Brandt</span>
					<span className='Ticketname_5'>Mirian Caldeira Brandt</span>
					<div className='avatarwoman5'>
						<div className='Ellipse_2'/>
						<img className='w5' src = {ImgAsset.Incioestatistica_w5} />
					</div>
				</div>
				<div className='dividerlinehorizontal_4'>
					<img className='divider_4' src = {ImgAsset.Incioestatistica_divider_4} />
				</div>
				<div className='dividerlinehorizontal_5'>
					<img className='divider_5' src = {ImgAsset.Incioestatistica_divider_5} />
				</div>
			</div>
			<div className='tableticketprioritylow_1'>
				<div className='content_3'>
					<div className='iconmorevertical_3'>
						<img className='Vector_7' src = {ImgAsset.Incioestatistica_Vector_7} />
					</div>
					<div className='chipprioritylow'>
						<div className='sheet_1'/>
						<span className='title'>low</span>
					</div>
					<span className='Timelabel'>11:30 AM</span>
					<span className='Datelabel'>May 25, 2019</span>
					<span className='Datecustomer'>on 22.05.2019</span>
					<span className='Customername'>Sam Smith</span>
					<span className='Ticketinformation_3'>Updated 4 day ago</span>
					<span className='Ticketname_6'>Referral Bonus</span>
					<div className='avatarwoman6'>
						<div className='Ellipse_3'/>
						<img className='w6' src = {ImgAsset.Incioestatistica_w6} />
					</div>
				</div>
				<div className='dividerlinehorizontal_6'>
					<img className='divider_6' src = {ImgAsset.Incioestatistica_divider_6} />
				</div>
				<div className='dividerlinehorizontal_7'>
					<img className='divider_7' src = {ImgAsset.Incioestatistica_divider_7} />
				</div>
			</div>
			<div className='table_bottom'>
				<div className='rowsperpage'>
					<span className='Rowsperpage'>Rows per page:</span>
					<span className='_8'>8</span>
					<div className='icondropdown'>
						<img className='Vector_8' src = {ImgAsset.Incioestatistica_Vector_8} />
					</div>
				</div>
				<div className='pagination'>
					<span className='_18of1240'>1-8 of 1240</span>
					<div className='iconarrowleft'>
						<img className='left' src = {ImgAsset.Incioestatistica_left} />
					</div>
					<div className='iconarrowright'>
						<img className='right' src = {ImgAsset.Incioestatistica_right} />
					</div>
				</div>
			</div>
			<div className='tableticketprioritynormal'>
				<div className='content_4'>
					<div className='iconmorevertical_4'>
						<img className='Vector_9' src = {ImgAsset.Incioestatistica_Vector_9} />
					</div>
					<span className='Ticketinformation_4'>3 doações</span>
					<span className='Ticketname_7'>Mário Garcia</span>
					<div className='avatarman7'>
						<div className='Ellipse_4'/>
						<img className='m7' src = {ImgAsset.Incioestatistica_m7} />
					</div>
				</div>
				<div className='dividerlinehorizontal_8'>
					<img className='divider_8' src = {ImgAsset.Incioestatistica_divider_8} />
				</div>
				<div className='dividerlinehorizontal_9'>
					<img className='divider_9' src = {ImgAsset.Incioestatistica_divider_9} />
				</div>
				<span className='Ticketname_8'>Luiz França Reis</span>
			</div>
			<div className='tableticketprioritynormal_1'>
				<div className='content_5'>
					<div className='iconmorevertical_5'>
						<img className='Vector_10' src = {ImgAsset.Incioestatistica_Vector_10} />
					</div>
					<div className='chipprioritynormal'>
						<div className='sheet_2'/>
						<span className='title_1'>Normal</span>
					</div>
					<span className='Timelabel_1'>1:00 PM</span>
					<span className='Datelabel_1'>May 24, 2019</span>
					<span className='Datecustomer_1'>on 21.05.2019</span>
					<span className='Customername_1'>Steve Rogers</span>
					<span className='Ticketinformation_5'>Updated 6 days ago</span>
					<span className='Ticketname_9'>How do I change my password?</span>
					<div className='avatarwoman7'>
						<div className='Ellipse_5'/>
						<img className='w7' src = {ImgAsset.Incioestatistica_w7} />
					</div>
				</div>
				<div className='dividerlinehorizontal_10'>
					<img className='divider_10' src = {ImgAsset.Incioestatistica_divider_10} />
				</div>
				<div className='dividerlinehorizontal_11'>
					<img className='divider_11' src = {ImgAsset.Incioestatistica_divider_11} />
				</div>
			</div>
			<Link to='/undefined'>
				<div className='tableticketpriorityhighhover'>
					<div className='sheet_3'/>
					<div className='iconcursorpointinghand'>
						<div className='Group_1'>
							<img className='Fill1' src = {ImgAsset.Incioestatistica_Fill1} />
							<img className='Stroke3' src = {ImgAsset.Incioestatistica_Stroke3} />
							<img className='Stroke5' src = {ImgAsset.Incioestatistica_Stroke5} />
							<img className='Stroke7' src = {ImgAsset.Incioestatistica_Stroke7} />
							<img className='Stroke9' src = {ImgAsset.Incioestatistica_Stroke9} />
						</div>
					</div>
					<div className='content_6'>
						<div className='iconmorevertical_6'>
							<img className='Vector_11' src = {ImgAsset.Incioestatistica_Vector_11} />
						</div>
						<span className='Ticketinformation_6'>44 doações</span>
						<span className='Ticketname_10'>Empresa de Alimentos X</span>
						<div className='avatarman6'>
							<div className='Ellipse_6'/>
							<img className='m6' src = {ImgAsset.Incioestatistica_m6} />
						</div>
					</div>
					<div className='dividerlinehorizontal_12'>
						<img className='divider_12' src = {ImgAsset.Incioestatistica_divider_12} />
					</div>
					<span className='Ticketname_11'>Maria Lourdes Pires</span>
				</div>
			</Link>
		</div>
		<div className='iconparkranking'>
			<div className='Group_2'>
				<img className='Vector_12' src = {ImgAsset.Incioestatistica_Vector_12} />
				<img className='Vector_13' src = {ImgAsset.Incioestatistica_Vector_13} />
				<img className='Vector_14' src = {ImgAsset.Incioestatistica_Vector_14} />
			</div>
		</div>
		<span className='Ranking'>Ranking</span>
		<div className='Veraltimadoaoassociada'>
		</div>
	</div>
	)
}