import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';


import SingIn from '~/pages/SignIn/'
import SingUp from '~/pages/SignUp/'
import ForgotPassword from '~/pages/ForgotPassword/'
import Profile from '~/pages/Profile/'



import Dashboard_Admin from '~/pages/Admin/Dashboard/'

import Dashboard_SuporteCloud from '~/pages/SuporteCloud/Dashboard/'
import Backup_SuporteCloud from '~/pages/SuporteCloud/Backup/'
import InstantRecovery_SuporteCloud from '~/pages/SuporteCloud/Backup/InstantRecovery'
import Criacao_SuporteCloud from '~/pages/SuporteCloud/Criacao/'
import ServidorSeparado_SuporteCloud from '~/pages/SuporteCloud/Criacao/ServidorSeparado'




import Dashboard_Aprendiz from '~/pages/Aprendiz/Dashboard'
import Dashboard_Limitado from '~/pages/Limitado/Dashboard'


export default function Routes() {
  return (
    <Switch>

      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/ForgotPassword" component={ForgotPassword} />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/Admin/Dashboard" component={Dashboard_Admin} isPrivate />

      <Route path="/SuporteCloud/Dashboard" component={Dashboard_SuporteCloud} isPrivate />

      <Route path="/SuporteCloud/Backup" component={Backup_SuporteCloud} isPrivate />
      <Route path="/SuporteCloud/InstantRecovery" component={InstantRecovery_SuporteCloud} isPrivate />

      <Route path="/SuporteCloud/Criacao" component={Criacao_SuporteCloud} isPrivate />
      <Route path="/SuporteCloud/CriarServidorSepado" component={ServidorSeparado_SuporteCloud} isPrivate />

      <Route path="/Aprendiz/Dashboard" component={Dashboard_Aprendiz} isPrivate />

      <Route path="/Limitado/Dashboard" component={Dashboard_Limitado} isPrivate />

    </Switch>

  )


}
