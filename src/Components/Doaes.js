import React from 'react'
import './Doaes.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Doaes () {
    return (
	<div className='Doaes_Doaes'>
		<div className='Alltickets'>
			<div className='tableticketpriorityhigh'>
				<div className='dividerlinehorizontal'>
					<img className='divider' src = {ImgAsset.Doaes_divider} />
				</div>
				<div className='dividerlinehorizontal_1'>
					<img className='divider_1' src = {ImgAsset.Doaes_divider_1} />
				</div>
			</div>
			<div className='cardsdefault'>
				<div className='sheet'/>
				<span className='Voluntrio'>Voluntário</span>
				<span className='Doador'>Doador</span>
				<span className='ltimadoao'>Última doação</span>
				<span className='Entregue'>Entregue</span>
				<div className='sort'>
					<span className='Ordenar'>Ordenar</span>
					<div className='iconsort'>
						<img className='Vector' src = {ImgAsset.Doaes_Vector} />
					</div>
				</div>
				<div className='content'>
					<div className='iconmorevertical'>
						<img className='Vector_1' src = {ImgAsset.Doaes_Vector_1} />
					</div>
					<span className='Timelabel'>6:30 PM</span>
					<span className='Datelabel'>May 26, 2019</span>
					<span className='Datecustomer'>on 24.05.2019</span>
					<span className='Customername'>Tom Cruise</span>
					<span className='Ticketinformation'>10 daações</span>
					<span className='Ticketname'>Márcio Lopez Garcia</span>
					<div className='avatarman5'>
						<div className='Ellipse'/>
						<img className='m5' src = {ImgAsset.Doaes_m5} />
					</div>
				</div>
				<div className='tableticketprioritynormal'>
					<div className='content_1'>
						<div className='iconmorevertical_1'>
							<img className='Vector_2' src = {ImgAsset.Doaes_Vector_2} />
						</div>
						<span className='Timelabel_1'>2:00 PM</span>
						<span className='Datelabel_1'>May 25, 2019</span>
						<span className='Datecustomer_1'>on 23.05.2019</span>
						<span className='Customername_1'>Chris Evans</span>
						<span className='Ticketinformation_1'>19 doações</span>
						<span className='Ticketname_1'>Luiz Meira Lopez</span>
						<div className='avatarman4'>
							<div className='Ellipse_1'/>
							<img className='m4' src = {ImgAsset.Doaes_m4} />
						</div>
					</div>
					<div className='dividerlinehorizontal_2'>
						<img className='divider_2' src = {ImgAsset.Doaes_divider_2} />
					</div>
					<div className='dividerlinehorizontal_3'>
						<img className='divider_3' src = {ImgAsset.Doaes_divider_3} />
					</div>
					<div className='healthiconsyesoutline'>
						<div className='Group'>
							<img className='Vector_3' src = {ImgAsset.Doaes_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.Doaes_Vector_4} />
						</div>
					</div>
				</div>
				<div className='filter'>
					<span className='Filtro'>Filtro</span>
					<div className='iconfilter'>
						<img className='Vector_5' src = {ImgAsset.Doaes_Vector_5} />
					</div>
				</div>
				<div className='healthiconsyesoutline_1'>
					<div className='Group_1'>
						<img className='Vector_6' src = {ImgAsset.Doaes_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Doaes_Vector_7} />
					</div>
				</div>
				<img className='Vector_8' src = {ImgAsset.Doaes_Vector_8} />
			</div>
			<div className='tableticketprioritylow'>
				<div className='content_2'>
					<div className='iconmorevertical_2'>
						<img className='Vector_9' src = {ImgAsset.Doaes_Vector_9} />
					</div>
					<span className='Timelabel_2'>8:00 AM</span>
					<span className='Datelabel_2'>May 26, 2021</span>
					<span className='Datecustomer_2'>on 24.05.2019</span>
					<span className='Customername_2'>Matt Damon</span>
					<span className='Ticketinformation_2'>1 doação</span>
					<span className='Ticketname_2'>Mirian Caldeira Brandt</span>
					<div className='avatarwoman5'>
						<div className='Ellipse_2'/>
						<img className='w5' src = {ImgAsset.Incioestatistica_w5} />
					</div>
				</div>
				<div className='dividerlinehorizontal_4'>
					<img className='divider_4' src = {ImgAsset.Doaes_divider_4} />
				</div>
				<div className='dividerlinehorizontal_5'>
					<img className='divider_5' src = {ImgAsset.Doaes_divider_5} />
				</div>
				<div className='healthiconsyesoutline_2'>
					<div className='Group_2'>
						<img className='Vector_10' src = {ImgAsset.Doaes_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Doaes_Vector_11} />
					</div>
				</div>
			</div>
			<div className='tableticketprioritylow_1'>
				<div className='content_3'>
					<div className='iconmorevertical_3'>
						<img className='Vector_12' src = {ImgAsset.Doaes_Vector_12} />
					</div>
					<div className='chipprioritylow'>
						<div className='sheet_1'/>
						<span className='title'>low</span>
					</div>
					<span className='Timelabel_3'>11:30 AM</span>
					<span className='Datelabel_3'>May 25, 2019</span>
					<span className='Datecustomer_3'>on 22.05.2019</span>
					<span className='Customername_3'>Sam Smith</span>
					<span className='Ticketinformation_3'>Updated 4 day ago</span>
					<span className='Ticketname_3'>Referral Bonus</span>
					<div className='avatarwoman6'>
						<div className='Ellipse_3'/>
						<img className='w6' src = {ImgAsset.Incioestatistica_w6} />
					</div>
				</div>
				<div className='dividerlinehorizontal_6'>
					<img className='divider_6' src = {ImgAsset.Doaes_divider_6} />
				</div>
				<div className='dividerlinehorizontal_7'>
					<img className='divider_7' src = {ImgAsset.Doaes_divider_7} />
				</div>
			</div>
			<div className='tableticketpriorityhigh_1'>
				<div className='content_4'>
					<div className='iconmorevertical_4'>
						<img className='Vector_13' src = {ImgAsset.Doaes_Vector_13} />
					</div>
					<span className='Timelabel_4'>7:30 PM</span>
					<span className='Datelabel_4'>May 26, 2022</span>
					<span className='Datecustomer_4'>on 24.05.2019</span>
					<span className='Customername_4'>Robert Downey</span>
					<span className='Ticketinformation_4'>23 doações</span>
					<span className='Ticketname_4'>Luiza Maria Pererira</span>
					<div className='avatarwoman3'>
						<div className='Ellipse_4'/>
						<img className='w3' src = {ImgAsset.Incioestatistica_w3} />
					</div>
				</div>
				<div className='dividerlinehorizontal_8'>
					<img className='divider_8' src = {ImgAsset.Doaes_divider_8} />
				</div>
				<div className='dividerlinehorizontal_9'>
					<img className='divider_9' src = {ImgAsset.Doaes_divider_9} />
				</div>
			</div>
			<div className='table_bottom'>
				<div className='rowsperpage'>
					<span className='Rowsperpage'>Rows per page:</span>
					<span className='_8'>8</span>
					<div className='icondropdown'>
						<img className='Vector_14' src = {ImgAsset.Doaes_Vector_14} />
					</div>
				</div>
				<div className='pagination'>
					<span className='_18of1240'>1-8 of 1240</span>
					<div className='iconarrowleft'>
						<img className='left' src = {ImgAsset.Doaes_left} />
					</div>
					<div className='iconarrowright'>
						<img className='right' src = {ImgAsset.Doaes_right} />
					</div>
				</div>
			</div>
			<div className='tableticketprioritynormal_1'>
				<div className='content_5'>
					<div className='iconmorevertical_5'>
						<img className='Vector_15' src = {ImgAsset.Doaes_Vector_15} />
					</div>
					<span className='Timelabel_5'>5:00 PM</span>
					<span className='Datelabel_5'>May 25, 2019</span>
					<span className='Datecustomer_5'>on 24.05.2019</span>
					<span className='Customername_5'>Christian Bale</span>
					<span className='Ticketinformation_5'>3 doações</span>
					<span className='Ticketname_5'>Mário Garcia</span>
					<div className='avatarman7'>
						<div className='Ellipse_5'/>
						<img className='m7' src = {ImgAsset.Incioestatistica_m7} />
					</div>
				</div>
				<div className='dividerlinehorizontal_10'>
					<img className='divider_10' src = {ImgAsset.Doaes_divider_10} />
				</div>
				<div className='dividerlinehorizontal_11'>
					<img className='divider_11' src = {ImgAsset.Doaes_divider_11} />
				</div>
				<img className='Vector_16' src = {ImgAsset.Doaes_Vector_16} />
			</div>
			<div className='tableticketprioritynormal_2'>
				<div className='content_6'>
					<div className='iconmorevertical_6'>
						<img className='Vector_17' src = {ImgAsset.Doaes_Vector_17} />
					</div>
					<div className='chipprioritynormal'>
						<div className='sheet_2'/>
						<span className='title_1'>Normal</span>
					</div>
					<span className='Timelabel_6'>1:00 PM</span>
					<span className='Datelabel_6'>May 24, 2019</span>
					<span className='Datecustomer_6'>on 21.05.2019</span>
					<span className='Customername_6'>Steve Rogers</span>
					<span className='Ticketinformation_6'>Updated 6 days ago</span>
					<span className='Ticketname_6'>How do I change my password?</span>
					<div className='avatarwoman7'>
						<div className='Ellipse_6'/>
						<img className='w7' src = {ImgAsset.Incioestatistica_w7} />
					</div>
				</div>
				<div className='dividerlinehorizontal_12'>
					<img className='divider_12' src = {ImgAsset.Doaes_divider_12} />
				</div>
				<div className='dividerlinehorizontal_13'>
					<img className='divider_13' src = {ImgAsset.Doaes_divider_13} />
				</div>
			</div>
			<div className='tableticketpriorityhighhover'>
				<div className='sheet_3'/>
				<div className='iconcursorpointinghand'>
					<div className='Group_3'>
						<img className='Fill1' src = {ImgAsset.Doaes_Fill1} />
						<img className='Stroke3' src = {ImgAsset.Doaes_Stroke3} />
						<img className='Stroke5' src = {ImgAsset.Doaes_Stroke5} />
						<img className='Stroke7' src = {ImgAsset.Doaes_Stroke7} />
						<img className='Stroke9' src = {ImgAsset.Doaes_Stroke9} />
					</div>
				</div>
				<div className='content_7'>
					<div className='iconmorevertical_7'>
						<img className='Vector_18' src = {ImgAsset.Doaes_Vector_18} />
					</div>
					<span className='Timelabel_7'>4:00 PM</span>
					<span className='Datelabel_7'>May 25, 2021</span>
					<span className='Datecustomer_7'>on 24.05.2019</span>
					<span className='Customername_7'>Henry Cavil</span>
					<span className='Ticketinformation_7'>44 doações</span>
					<span className='Ticketname_7'>Paulo dos Santos Cruz</span>
					<div className='avatarman6'>
						<div className='Ellipse_7'/>
						<img className='m6' src = {ImgAsset.Incioestatistica_m6} />
					</div>
				</div>
				<div className='dividerlinehorizontal_14'>
					<img className='divider_14' src = {ImgAsset.Doaes_divider_14} />
				</div>
				<div className='dividerlinehorizontal_15'>
					<img className='divider_15' src = {ImgAsset.Doaes_divider_15} />
				</div>
				<img className='Vector_19' src = {ImgAsset.Doaes_Vector_19} />
			</div>
		</div>
		<img className='Juntos1' src = {ImgAsset.Doadores_Juntos1} />
		<Link to='/editarvoluntrio'>
			<div className='Group75'>
				<div className='antdesigneditoutlined'>
					<img className='Vector_20' src = {ImgAsset.Doaes_Vector_20} />
				</div>
				<div className='antdesigneditoutlined_1'>
					<img className='Vector_21' src = {ImgAsset.Doaes_Vector_21} />
				</div>
				<div className='antdesigneditoutlined_2'>
					<img className='Vector_22' src = {ImgAsset.Doaes_Vector_22} />
				</div>
				<div className='antdesigneditoutlined_3'>
					<img className='Vector_23' src = {ImgAsset.Doaes_Vector_23} />
				</div>
				<div className='antdesigneditoutlined_4'>
					<img className='Vector_24' src = {ImgAsset.Doaes_Vector_24} />
				</div>
				<div className='antdesigneditoutlined_5'>
					<img className='Vector_25' src = {ImgAsset.Doaes_Vector_25} />
				</div>
				<div className='antdesigneditoutlined_6'>
					<img className='Vector_26' src = {ImgAsset.Doaes_Vector_26} />
				</div>
				<div className='antdesigneditoutlined_7'>
					<img className='Vector_27' src = {ImgAsset.Doaes_Vector_27} />
				</div>
				<div className='antdesigneditoutlined_8'>
					<img className='Vector_28' src = {ImgAsset.Doaes_Vector_28} />
				</div>
				<div className='antdesigneditoutlined_9'>
					<img className='Vector_29' src = {ImgAsset.Doaes_Vector_29} />
				</div>
				<div className='antdesigneditoutlined_10'>
					<img className='Vector_30' src = {ImgAsset.Doaes_Vector_30} />
				</div>
				<div className='antdesigneditoutlined_11'>
					<img className='Vector_31' src = {ImgAsset.Doaes_Vector_31} />
				</div>
			</div>
		</Link>
		<div className='dashiconsinfo'>
			<img className='Vector_32' src = {ImgAsset.Doaes_Vector_32} />
		</div>
		<div className='dashiconsinfo_1'>
			<img className='Vector_33' src = {ImgAsset.Doaes_Vector_33} />
		</div>
		<div className='dashiconsinfo_2'>
			<img className='Vector_34' src = {ImgAsset.Doaes_Vector_34} />
		</div>
		<div className='dashiconsinfo_3'>
			<img className='Vector_35' src = {ImgAsset.Doaes_Vector_35} />
		</div>
		<div className='dashiconsinfo_4'>
			<img className='Vector_36' src = {ImgAsset.Doaes_Vector_36} />
		</div>
		<div className='dashiconsinfo_5'>
			<img className='Vector_37' src = {ImgAsset.Doaes_Vector_37} />
		</div>
		<div className='carbonnextfilled'>
			<div className='Group_4'>
				<img className='Vector_38' src = {ImgAsset.Doaes_Vector_38} />
			</div>
		</div>
		<div className='carbonnextfilled_1'>
			<img className='Vector_39' src = {ImgAsset.Doaes_Vector_39} />
		</div>
		<span className='_1de4'>1 de 4</span>
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
		<Link to='/undefined'>
			<span className='Doaes_1'>Doações</span>
		</Link>
		<img className='Vector_40' src = {ImgAsset.Doaes_Vector_40} />
		<Link to='/incioestatistica'>
			<span className='Doaes_2'>INÍCIO</span>
		</Link>
		<span className='Doaes_3'>Doações</span>
		<img className='Vector_41' src = {ImgAsset.Doaes_Vector_41} />
		<Link to='/cadastrodoao'>
			<div className='ButtonActive'>
				<div className='p10h40'/>
				<span className='AddCustomer'>Inserir novo</span>
				<div className='IconButton'>
					<img className='IconButton_1' src = {ImgAsset.Doaes_IconButton_1} />
				</div>
			</div>
		</Link>
		<div className='SearchBar'>
			<div className='Rectangle21'/>
			<div className='Group74'>
				<span className='Search'>Pesquisa  por..</span>
				<div className='ShapeSearch'>
					<img className='ShapeSearch_1' src = {ImgAsset.Doaes_ShapeSearch_1} />
				</div>
			</div>
			<div className='IconInput'>
				<img className='IconButton_2' src = {ImgAsset.Doaes_IconButton_2} />
			</div>
		</div>
		<img className='Vector_42' src = {ImgAsset.Doaes_Vector_42} />
		<div className='Rectangle27'/>
		<Link to='/beneficiario'>
			<span className='Beneficirios'>Beneficiários</span>
		</Link>
	</div>
	)
}