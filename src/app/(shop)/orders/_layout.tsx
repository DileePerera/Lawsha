import { Stack } from "expo-router";

export default function OrderLayout(){
    return <Stack>
        <Stack.Screen 
        name="Orders" 
        options={{
            headerShown:false,
        }}/>
    </Stack>
}