import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { TabContext, TabPanel } from '@mui/lab'
import './styles.sass'
import { Tabs } from '@mui/material'
import { Profile } from './Profile'
import { Password } from './Password'
export const MyAccount = () => {
  const roleUser = JSON.parse(localStorage.getItem('userLogged') as any).role
  const [value, setValue] = React.useState(roleUser === 'salesman' ? '2' : '1')
  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: '10px' }}>
          <Tabs
            value={value}
            onChange={(event: any, newValue: React.SetStateAction<string>) => setValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ width: '80%' }}>
            {roleUser !== 'salesman' && <Tab id='tab-1' label="Perfil" value="1" />}
            <Tab label="Segurança" value="2" />
            <Tab label="Pagamentos" value="3" />
          </Tabs>
        </Box>
        {roleUser !== 'salesman' && <TabPanel value="1">{<Profile />}</TabPanel>}
        <TabPanel value="2">{<Password />}</TabPanel>
        <TabPanel value="3">{<><span>Tela de Pagamentos em construção</span></>}</TabPanel>
      </TabContext>
    </Box>
  )
}