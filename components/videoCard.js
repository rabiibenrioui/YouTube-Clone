import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import '../global.css';

export default function ShortVideoCard({video}) {
    return (
        <View className="p-2">
            {/* video thumbnail & duration */}
            <Image source={video.thumbnail} className="h-52 w-full rounded-lg" />
            <View className="flex items-end mr-2 mb-5 -mt-6" >
                <View className="bg-black rounded px-1">
                    <Text className="text-white font-semibold text-sm" >
                        {video.duration}
                    </Text>
                </View>
            </View>

            {/* video title and info */}
            <View className="flex-row justify-between items-center pb-5 space-x-3 mx-1.5 gap-2">
                <Image source={video.avatar} className="h-9 w-9 rounded-full" />
                <View className="flex-1 space-y-1">
                    <Text className="text-white text-lg">
                        {video.title}
                    </Text>
                    <Text className="text-zinc-400" >
                        {video.channelTitle} • {video.viewCount} • {video.publishedText}
                    </Text>
                </View>
            </View>
        </View>
    )
}