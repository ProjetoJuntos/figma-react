import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/HomePublic';
import Cadastrodoao from '../Components/Cadastrodoao';
import Dashiconsno from '../Components/dashiconsno';
import Icbaselineaddaphoto from '../Components/icbaselineaddaphoto';
import Antdesignsearchoutlined from '../Components/antdesignsearchoutlined';
import HomePublic from '../Components/HomePublic';
import Doadores from '../Components/Doadores';
import Beneficiario from '../Components/Beneficiario';
import Doaes from '../Components/Doaes';
import Incioestatistica from '../Components/Incioestatistica';
import Voluntrios from '../Components/Voluntrios';
import Verdetalhes from '../Components/Verdetalhes';
import Date from '../Components/date';
import PrivateLogin from '../Components/PrivateLogin';
import Cadastrobeneficiario from '../Components/Cadastrobeneficiario';
import CadastroVoluntario from '../Components/CadastroVoluntario';
import CadastroVoluntario_1 from '../Components/CadastroVoluntario_1';
import CadastroDoador from '../Components/CadastroDoador';
import Perfilpic from '../Components/perfilpic';
import EditarVoluntrio from '../Components/EditarVoluntrio';
import Pic from '../Components/Pic';
import Icbaselinelogin from '../Components/icbaselinelogin';
import Icbaselinelogin_1 from '../Components/icbaselinelogin_1';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePublic /></Route>
				<Route exact path="/cadastrodoao"><Cadastrodoao /></Route>
				<Route exact path="/dashiconsno"><Dashiconsno /></Route>
				<Route exact path="/icbaselineaddaphoto"><Icbaselineaddaphoto /></Route>
				<Route exact path="/antdesignsearchoutlined"><Antdesignsearchoutlined /></Route>
				<Route exact path="/homepublic"><HomePublic /></Route>
				<Route exact path="/doadores"><Doadores /></Route>
				<Route exact path="/beneficiario"><Beneficiario /></Route>
				<Route exact path="/doaes"><Doaes /></Route>
				<Route exact path="/incioestatistica"><Incioestatistica /></Route>
				<Route exact path="/voluntrios"><Voluntrios /></Route>
				<Route exact path="/verdetalhes"><Verdetalhes /></Route>
				<Route exact path="/date"><Date /></Route>
				<Route exact path="/privatelogin"><PrivateLogin /></Route>
				<Route exact path="/cadastrobeneficiario"><Cadastrobeneficiario /></Route>
				<Route exact path="/cadastrovoluntario"><CadastroVoluntario /></Route>
				<Route exact path="/cadastrovoluntario_1"><CadastroVoluntario_1 /></Route>
				<Route exact path="/cadastrodoador"><CadastroDoador /></Route>
				<Route exact path="/perfilpic"><Perfilpic /></Route>
				<Route exact path="/editarvoluntrio"><EditarVoluntrio /></Route>
				<Route exact path="/pic"><Pic /></Route>
				<Route exact path="/icbaselinelogin"><Icbaselinelogin /></Route>
				<Route exact path="/icbaselinelogin_1"><Icbaselinelogin_1 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;