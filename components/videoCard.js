import { Text, View, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import '../global.css';

export default function VideoCard({video}) {
    // better formatting for the views
    const formatViews = (count) => {
        return new Intl.NumberFormat('en', { notation: 'compact' }).format(count);
    };
    
    // avoid error from undefined objects in the api
    if (!video?.thumbnail) return null;

    return (
        <TouchableOpacity className="p-2">
            {/* video thumbnail & duration */}
            <Image source={{ uri: video.thumbnail[2].url }} className="h-52 w-full rounded-lg" />
            <View className="flex items-end mr-2 mb-5 -mt-6" >
                <View className="bg-black rounded px-1">
                    <Text className="text-white font-bold text-sm" >
                        {video.lengthText}
                    </Text>
                </View>
            </View>

            {/* video title and info */}
            <View className="flex-row justify-between items-start pb-5 space-x-3 mx-1.5 gap-2.5">
                <Image source={require('../assets/avatars/youtubeChannel.jpg')} className="h-9 w-9 rounded-full mt-1" />
                <View className="flex-1 space-y-1">
                    <Text className="text-white text-lg">
                        {video.title}
                    </Text>
                    <Text className="text-zinc-400 text-sm" >
                        {video.channelTitle} • {formatViews(video.viewCount)} views • {video.publishedTimeText}
                    </Text>
                </View>
                {/* 'more' menu icon */}
                <View className="mt-2.5 mr-1">
                    <Image 
                     source={require('../assets/icons/more.png')} 
                     className="h-3 w-2"
                     style={{ tintColor: 'silver' }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}