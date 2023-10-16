// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import createPost from '../../app/createPost/index';
// import profile from '../../app/profile/index';
// import scrollPage from '../../app/scrollPage';
// import topCleanups from '../../app/topCleanups/index';
// import cameraPage from '../../app/cameraPage/index';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={createPost} />
//             <Tab.Screen name="Profile" component={profile} />
//             <Tab.Screen name="Settings" component={scrollPage} />
//             <Tab.Screen name="Top Cleanups" component={topCleanups} />
//             <Tab.Screen name="Camera Page" component={cameraPage} />
//         </Tab.Navigator>
//     );
// };

// export default TabNavigator;




// import React from 'react';
// import { Tabs } from 'expo-router/tabs';
// import { View, Pressable, Text } from 'react-native';
// import { Link } from 'expo-router';

// export default function AppLayout() {
//     return (
//         <Tabs>
//             <Tabs.Screen
//                 // Name of the route to hide.
//                 name="index"
//                 options={{
//                     // This tab will no longer show up in the tab bar.
//                     href: null,
//                 }}
//             />
//             <Link href="/other" asChild>
//                 <Pressable>
//                     <Text>Home</Text>
//                 </Pressable>
//             </Link>
//         </Tabs>
//     );
// }

