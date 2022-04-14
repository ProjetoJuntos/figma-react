import React from 'react'
import './date.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Date () {
    return (
	<div className='date_date'>
		<div className='default'>
			<div className='InFocus'>
			</div>
			<span className='ddmmyyyy'>dd/mm/yyyy</span>
		</div>
		<div className='hover'>
			<img className='Arrow' src = {ImgAsset.date_Arrow} />
			<div className='ClearIcon'>
				<img className='CombinedShape' src = {ImgAsset.date_CombinedShape} />
			</div>
			<div className='Increment'>
				<div className='increment'>
					<div className='Rectangle16'/>
					<img className='CombinedShape_1' src = {ImgAsset.date_CombinedShape_1} />
					<img className='CombinedShape_2' src = {ImgAsset.date_CombinedShape_2} />
				</div>
			</div>
			<div className='InFocus_1'>
			</div>
			<span className='ddmmyyyy_1'>dd/mm/yyyy</span>
		</div>
		<div className='open'>
			<div className='datehover'>
				<img className='Arrow_1' src = {ImgAsset.date_Arrow_1} />
				<div className='ClearIcon_1'>
					<img className='CombinedShape_3' src = {ImgAsset.date_CombinedShape_3} />
				</div>
				<div className='Increment_1'>
					<div className='increment_1'>
						<div className='Rectangle16_1'/>
						<img className='CombinedShape_4' src = {ImgAsset.date_CombinedShape_4} />
						<img className='CombinedShape_5' src = {ImgAsset.date_CombinedShape_5} />
					</div>
				</div>
				<div className='InFocus_2'>
				</div>
				<div className='yyyyhover'>
				</div>
				<div className='mmhover'>
				</div>
				<div className='ddhover'>
				</div>
				<span className='ddmmyyyy_2'>dd/mm/yyyy</span>
			</div>
			<div className='OpenCalender'>
				<div className='Calender'>
					<div className='Header'>
						<div className='TitleRow'>
							<span className='Mon'>Mon</span>
						</div>
						<div className='TitleRow_1'>
							<span className='Mon_1'>Tue</span>
						</div>
						<div className='TitleRow_2'>
							<span className='Mon_2'>Wed</span>
						</div>
						<div className='TitleRow_3'>
							<span className='Mon_3'>Thu</span>
						</div>
						<div className='TitleRow_4'>
							<span className='Mon_4'>Fri</span>
						</div>
						<div className='TitleRow_5'>
							<span className='Mon_5'>Sat</span>
						</div>
						<div className='TitleRow_6'>
							<span className='Mon_6'>Sun</span>
						</div>
					</div>
					<div className='Row'>
						<div className='Day'>
							<span className='_29'>29</span>
						</div>
						<div className='Day_1'>
							<span className='_29_1'>30</span>
						</div>
						<div className='Day_2'>
							<span className='_29_2'>31</span>
						</div>
						<div className='Day_3'>
							<span className='_29_3'>1</span>
						</div>
						<div className='Day_4'>
							<span className='_29_4'>2</span>
						</div>
						<div className='Day_5'>
							<span className='_29_5'>3</span>
						</div>
						<div className='Day_6'>
							<span className='_29_6'>4</span>
						</div>
					</div>
					<div className='Row_1'>
						<div className='Day_7'>
							<span className='_29_7'>5</span>
						</div>
						<div className='Day_8'>
							<span className='_29_8'>6</span>
						</div>
						<div className='Day_9'>
							<span className='_29_9'>7</span>
						</div>
						<div className='Today'>
							<span className='_29_10'>8</span>
						</div>
						<div className='Day_10'>
							<span className='_29_11'>9</span>
						</div>
						<div className='Day_11'>
							<span className='_29_12'>10</span>
						</div>
						<div className='Day_12'>
							<span className='_29_13'>11</span>
						</div>
					</div>
					<div className='Row_2'>
						<div className='Day_13'>
							<span className='_29_14'>12</span>
						</div>
						<div className='Day_14'>
							<span className='_29_15'>13</span>
						</div>
						<div className='Day_15'>
							<span className='_29_16'>14</span>
						</div>
						<div className='Day_16'>
							<span className='_29_17'>15</span>
						</div>
						<div className='Day_17'>
							<span className='_29_18'>16</span>
						</div>
						<div className='Day_18'>
							<span className='_29_19'>17</span>
						</div>
						<div className='Day_19'>
							<span className='_29_20'>18</span>
						</div>
					</div>
					<div className='Row_3'>
						<div className='Day_20'>
							<span className='_29_21'>19</span>
						</div>
						<div className='Day_21'>
							<span className='_29_22'>20</span>
						</div>
						<div className='Day_22'>
							<span className='_29_23'>21</span>
						</div>
						<div className='Day_23'>
							<span className='_29_24'>22</span>
						</div>
						<div className='Day_24'>
							<span className='_29_25'>23</span>
						</div>
						<div className='Day_25'>
							<span className='_29_26'>24</span>
						</div>
						<div className='Day_26'>
							<span className='_29_27'>25</span>
						</div>
					</div>
					<div className='Row_4'>
						<div className='Day_27'>
							<span className='_29_28'>26</span>
						</div>
						<div className='Day_28'>
							<span className='_29_29'>27</span>
						</div>
						<div className='Day_29'>
							<span className='_29_30'>28</span>
						</div>
						<div className='Day_30'>
							<span className='_29_31'>29</span>
						</div>
						<div className='Day_31'>
							<span className='_29_32'>30</span>
						</div>
						<div className='Day_32'>
							<span className='_29_33'>31</span>
						</div>
						<div className='Day_33'>
							<span className='_29_34'>1</span>
						</div>
					</div>
				</div>
				<div className='Header_1'>
					<img className='Button' src = {ImgAsset.date_Button} />
					<img className='Button_1' src = {ImgAsset.date_Button_1} />
					<img className='Button_2' src = {ImgAsset.date_Button_2} />
					<div className='Title'>
						<span className='January2018'>January 2018</span>
						<img className='Path4' src = {ImgAsset.date_Path4} />
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}