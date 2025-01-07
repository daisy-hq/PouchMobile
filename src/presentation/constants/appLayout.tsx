import React, {useState} from 'react'
import HomeScreen from '../screens/homeScreen'
import GoalsTrackerScreen from '../screens/goalsTrackerScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  Goal, House, Plus } from 'lucide-react-native';
import AddActionSheet from '../screens/addActionSheet'


const Tab = createBottomTabNavigator()

const TabItems = [
  {name: "dashboard", page: HomeScreen, icon:<House />, title:"Dashboard", },
  {name: "add", page: ()=>null, icon:<Plus />, title:"Action", actionSheet:true},
  {name: "goals", page: GoalsTrackerScreen, icon:<Goal />, title:"Goals", },
]

const RootTab = ()=>{
  
  const [open, setOpen] = useState(false);

  const handleToggleOverlay = () => {
    setOpen((prev) => !prev);
  };

  return(
  <>
    <Tab.Navigator >
      {TabItems.map((item, index)=>
        (<Tab.Screen key={index} name={item.name} component={item.page} listeners={item.actionSheet?{
          tabPress: (e) => {
            e.preventDefault(); // Prevent navigation
            handleToggleOverlay(); // Toggle the overlay
          },
        }:{
          tabPress: () => {}, 
        }}  options={{title: item.title, tabBarIcon:()=>item.icon, tabBarShowLabel:false}} />)
      )}
    </Tab.Navigator>
    <AddActionSheet open={open} toggleOverlay={handleToggleOverlay} />
  </>   
  )
}

const AppLayout = () => {
  return (
     <RootTab />
  )
}

export default AppLayout