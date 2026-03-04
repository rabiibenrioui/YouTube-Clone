import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import './global.css';
import { categories, shortVideos, videos } from './constants/index';
import ShortVideoCard from './components/shortVideoCard';
import VideoCard from './components/videoCard'

export default function HomeScreen() {
  const mainCategory = categories[0];
  const [activeCategory, setActiveCategory] = useState(mainCategory);

  return (
    <View className="flex-1 bg-stone-900">

      {/* home logo and buttons */}
      <SafeAreaView className="flex-row justify-between p-4">

        {/* YouTube logo */}
        <View className="flex-row items-center gap-1">
          
          <Image 
          source={require("./assets/icons/youtubeIcon.png")}
          className="h-6 w-9" />

          <Text className="text-white font-bold text-3xl tracking-tighter">YouTube</Text>

        </View>

        {/* buttons */}
        <View className="flex-row items-center gap-7">
          <TouchableOpacity>
            <Image 
            source={require('./assets/icons/cast.png')} 
            style={{ tintColor: 'white' }}
            className="w-7 h-7" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image 
            source={require('./assets/icons/bell.png')} 
            style={{ tintColor: 'white' }}
            className="w-7 h-7" />
          </TouchableOpacity>
            
          <TouchableOpacity>
            <Image 
            source={require('./assets/icons/search.png')} 
            style={{ tintColor: 'white' }}
            className="w-7 h-7" />
          </TouchableOpacity> 
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* categories */}
        <View className="py-2 pb-5">
          <ScrollView className="px-2" horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category, index) => {
                let isActive = category == activeCategory;
                let textClass = isActive ? 'text-black' : 'text-white';

                return (
                  <TouchableOpacity 
                    onPress={() => setActiveCategory(category)}
                    key={index}
                    style={{backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.1)'}}
                    className="rounded-md py-2 px-3 mr-2" 
                  >
                    <Text className={textClass}>{category}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>

        {/* short videos */}
        <View className="mt-2 mb-6 py-2 border-t-zinc-700 border-b-zinc-700 border-2 border-l-0 border-r-0">
          
          <View className="mx-4 flex-row items-center gap-1.5">
            <Image 
             source={require('./assets/icons/youtubeShorts.png')}
             className="h-7 w-6"/>
            <Text className="text-white text-xl font-semibold tracking-tighter mx-2">Shorts</Text>
          </View>

          <ScrollView className="p-4 pb-2" horizontal showsHorizontalScrollIndicator={false}>
            {
              shortVideos.map((item, index) => <ShortVideoCard item={item} key={index} />)
            }
          </ScrollView>

        </View>

        {/* videos */}
        <ScrollView>
          {
            videos.map((video, index) => <VideoCard video={video} key={index}/>)
          }
        </ScrollView>

      </ScrollView>
    </View>
  );
}
