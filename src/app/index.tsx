import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View className="flex flex-1 items-center p-6">
      <View className="flex flex-1 justify-center max-w-[960px]">
        <Text className="text-[64px] font-extrabold">Hello World</Text>
        <Text className="text-3xl text-[#38434D]">This is the first page of your app.</Text>
      </View>
    </View>
  );
}