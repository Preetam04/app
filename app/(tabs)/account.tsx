import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const navigate = useRouter();
  return (
    <SafeAreaView>
      <Text>Account Page</Text>
      <Link href={"/accountinfo"}>
        <Text>Account info</Text>
      </Link>

      <Button
        title="Account Info"
        onPress={() => {
          navigate.push("/accountinfo");
        }}
      />
    </SafeAreaView>
  );
}
