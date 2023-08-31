import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { TabContext, TabPanel } from '@mui/lab'
import { Profile, Password } from './'
import './styles.sass'
import { Tabs } from '@mui/material'
export const MyAccount = () => {
  const [value, setValue] = React.useState('1')
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
            <Tab id='tab-1' label="Perfil" value="1" />
            <Tab label="Segurança" value="2" />
            <Tab label="Pagamentos" value="3" />
          </Tabs>
        </Box>
        <TabPanel value="1">{<Profile />}</TabPanel>
        <TabPanel value="2">{<Password />}</TabPanel>
        <TabPanel value="3">{<><span>Tela de Pagamentos em construção</span></>}</TabPanel>
      </TabContext>
    </Box>
  )
}