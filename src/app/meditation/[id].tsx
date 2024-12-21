import { meditations } from "@/data";
import { router, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams();

  const { top } = useSafeAreaInsets();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation Not found</Text>;
  }

  return (
    <SafeAreaView>
      <Text className="text-3xl">{meditation?.title}</Text>

      <AntDesign
        onPress={() => router.back()}
        className="absolute right-4"
        style={{ top: top + 16 }}
        name="close"
        size={24}
        color="black"
      />
    </SafeAreaView>
  );
}
