import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';


// stateless function copononet 

const App = () => (
  <Grid>
    <ColorPanel />
    <SidePanel />
    <Messages />
    <MetaPanel />
  </Grid>
)

export default App;
