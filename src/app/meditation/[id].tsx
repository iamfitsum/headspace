import { meditations } from "@/data";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  async function playPauseSound() {
    if (sound) {
      if (playing) {
        console.log("Pausing Sound");
        await sound.pauseAsync();
        setPlaying(false);
      } else {
        console.log("Playing Sound");
        await sound.playAsync();
        setPlaying(true);
      }
    } else {
      console.log("Loading Sound");
      const { sound: newSound } = await Audio.Sound.createAsync(
        require("@assets/meditations/audio.mp3"),
      );
      setSound(newSound);

      // Set up playback status update
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis || 0);
          setDuration(status.durationMillis || 0);
        }
      });

      console.log("Playing Sound");
      await newSound.playAsync();
      setPlaying(true);
    }
  }

  useEffect(() => {
    return () => {
      if (sound) {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation Not found</Text>;
  }

  const formatTime = (timeMillis: number) => {
    const minutes = Math.floor(timeMillis / 60000);
    const seconds = Math.floor((timeMillis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

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
      <Pressable
        onPress={() => playPauseSound()}
        className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center"
      >
        <FontAwesome6
          name={playing ? "pause" : "play"}
          size={24}
          color="snow"
        />
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
            <Slider
              style={{ width: "100%", height: 30 }}
              value={position}
              minimumValue={0}
              maximumValue={duration}
              minimumTrackTintColor="#3A3937"
              maximumTrackTintColor="#3A393755"
              thumbTintColor="#3A3937"
              onValueChange={async (value) => {
                if (sound) {
                  await sound.setPositionAsync(value);
                  setPosition(value);
                }
              }}
            />
          </View>

          <View className="flex-row justify-between">
            <Text>{formatTime(position)}</Text>
            <Text>{formatTime(duration)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
