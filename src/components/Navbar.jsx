import { BusinessCenter, LocalHospital } from "@mui/icons-material"
import { Tabs } from "@mui/material"
import { Box } from "@mui/system"
import { Tab } from './Tab'
import { TabContext } from "./TabContext"

const Navbar = props => {
    const tabProps = [['Overview', <LocalHospital />], ['Create Organization', <BusinessCenter />]];
    
    const tabs = tabProps.map(prop => <Tab label={ prop[0] } key={tabProps.indexOf(prop)} icon={prop[1]} />);

    return (
        <TabContext.Consumer>
            {({currentTab, setCurrentTab}) => (
                <Box sx={{ mx: 3 }}>
                    <Tabs value={ currentTab } onChange={ (e, newValue) => setCurrentTab(newValue) } centered>
                        {tabs}
                    </Tabs>
                </Box>
            )}
        </TabContext.Consumer>
    )
}

export default Navbar;