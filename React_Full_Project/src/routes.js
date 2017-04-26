import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import SidebeepButtons from './views/Components/SidebeepButtons/'
import SidebeepCards from './views/Components/SidebeepCards/'
import SidebeepSwitch from './views/Components/SidebeepSwitch/'
import SidebeepForms from './views/Components/SidebeepForms/'
import SidebeepInput from './views/Components/SidebeepInput/'
import SidebeepRadio from './views/Components/SidebeepRadio/'
import SidebeepCheckbox from './views/Components/SidebeepCheckbox/'
import SidebeepImageInput from './views/Components/SidebeepImageInput/'

import SidebeepTabsNav from './views/Components/SidebeepTabsNav'
import SidebeepTabsNavLink from './views/Components/SidebeepTabsNavLink'
import SidebeepTabsContent from './views/Components/SidebeepTabsContent'
import SidebeepTabsContentPane from './views/Components/SidebeepTabsContentPane'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/'
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Forms from './views/Components/Forms/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'
import FontAwesome from './views/Icons/FontAwesome/'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/'
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import Widgets from './views/Widgets/'



export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="components/" name="Components">
        <IndexRoute component={Buttons}/>
        <Route path="sidebeepbuttons" name="Sidebeep Buttons" component={SidebeepButtons}/>
        <Route path="sidebeepcards" name="Sidebeep Cards" component={SidebeepCards}/>
        <Route path="sidebeepswitch" name="Sidebeep Switch" component={SidebeepSwitch}/>
        <Route path="sidebeepform" name="Sidebeep Forms" component={SidebeepForms}/>
        <Route path="sidebeepinput" name="Sidebeep Input" component={SidebeepInput}/>
        <Route path="sidebeepradio" name="Sidebeep Radio" component={SidebeepRadio}/>
        <Route path="sidebeepcheckbox" name="Sidebeep Checkbox" component={SidebeepCheckbox}/>
        <Route path="sidebeepimageinput" name="Sidebeep Image Input" component={SidebeepImageInput}/>
        <Route path="sidebeeptabsnav" name="Sidebeep Tabs Nav" component={SidebeepTabsNav}/>
        <Route path="sidebeeptabsnavlink" name="Sidebeep Tabs NavLink" component={SidebeepTabsNavLink}/>
        <Route path="sidebeeptabscontent" name="Sidebeep Tabs Content" component={SidebeepTabsContent}/>
        <Route path="sidebeeptabscontentpane" name="Sidebeep Tabs Content Pane" component={SidebeepTabsContentPane}/>
        <Route path="buttons" name="Buttons" component={Buttons}/>
        <Route path="cards" name="Cards" component={Cards}/>  
        <Route path="forms" name="Forms" component={Forms}/>
        <Route path="modals" name="Modals" component={Modals}/>
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
        <Route path="switches" name="Swithces" component={Switches}/>
        <Route path="tables" name="Tables" component={Tables}/>
        <Route path="tabs" name="Tabs" component={Tabs}/>
      </Route>
      <Route path="icons/" name="Icons">
        <IndexRoute component={FontAwesome}/>
        <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
        <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
      </Route>
      <Route path="widgets" name="Widgets" component={Widgets}/>
      <Route path="charts" name="Charts" component={Charts}/>
    </Route>
    <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>
  </Router>
);
