import { FlatList } from "react-native";
import { meditations } from "@/data";
import { MeditationListItem } from "@/components/MeditationListItem";

export default function HomePage() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="gap-8 p-3"
      renderItem={({ item }) => <MeditationListItem meditation={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}