import { meditations } from "@/data";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Slider from "@react-native-community/slider";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams();

  const { top } = useSafeAreaInsets();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation Not found</Text>;
  }

  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      {/* Header */}
      <View className="flex-1">
        <View className="flex-row items-center justify-between p-10">
          <AntDesign name="infocirlceo" size={26} color="black" />

          <View className="bg-zinc-800 p-2 rounded-md">
            <Text className="text-zinc-100 font-semibold">
              Today's Meditation
            </Text>
          </View>

          <AntDesign
            onPress={() => router.back()}
            name="close"
            size={26}
            color="black"
          />
        </View>

        <Text className="text-3xl mt-10 text-center text-zinc-800 font-semibold">
          {meditation?.title}
        </Text>
      </View>

      {/* Play / Pause Button */}
      <Pressable className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
        <FontAwesome6 name="play" size={24} color="snow" />
      </Pressable>

      {/* Footer: Player */}
      <View className="flex-1">
        <View className="p-5 mt-auto gap-5">
          <View className="flex-row justify-between">
            <MaterialCommunityIcons
              name="radio-tower"
              size={24}
              color="#3A3937"
            />
            <MaterialCommunityIcons
              name="cog-outline"
              size={24}
              color="#3A3937"
            />
          </View>

          <View>
            {/* <View className="bg-zinc-400 h-2" /> */}
            <Slider
              style={{ width: "100%", height: 30 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#3A3937"
              maximumTrackTintColor="#3A393755"
              thumbTintColor="#3A3937" 
            />
          </View>
          

          <View className="flex-row justify-between">
            <Text>03:22</Text>
            <Text>13:14</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
