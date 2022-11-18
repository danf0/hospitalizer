import { Box } from "@mui/material";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import CreateOrganization from "./create_org/CreateOrganization";
import Overview from "./overview/Overview";
import { useContext, useState } from "react";
import { TabContext } from "./TabContext";


const MainPage = () => {
    const modules = [<Overview key='overview' />, <CreateOrganization key='createOrg'/>];

    const [currentTab, setCurrentTab] = useState(0);

    const tabState = {
        currentTab: currentTab,
        setCurrentTab: setCurrentTab
    }

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <TabContext.Provider value={tabState}>
                <Navbar />
                <Wrapper height={85}>
                    {modules[useContext(TabContext)]}
                </Wrapper>
            </TabContext.Provider>
        </Box>
    )
}

export default MainPage;