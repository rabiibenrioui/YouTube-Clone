import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import '../global.css';

export default function ShortVideoCard({item}) {
    return (
        <View className="relative h-64 w-40 mr-3 flex justify-between">
            
            {/* thumbnail */}
            <Image 
             source={item.image}
             className="h-full w-full rounded-xl absolute" />
            
            {/* 'more' menu buttons */}
            <TouchableOpacity className="flex-row justify-end p-2.5">
                <Image 
                 source={require('../assets/icons/more.png')} 
                 className="h-4 w-2"
                 style={{ tintColor: 'white' }} />
            </TouchableOpacity>

            {/* title & views count */}
            <View className="p-2">
                
                <Text 
                 className="text-white shadow-slate-900 shadow-lg font-semibold text-sm"
                 style={styles.textShadows} >
                    {item.title}
                </Text>
                
                <Text 
                 className="text-white shadow-slate-900 shadow-lg font-bold text-xs"
                 style={styles.textShadows} >
                    {item.viewCount}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    textShadows: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width:2, height: 2 },
        textShadowRadius: 4,
    }
})