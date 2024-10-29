import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export const DownloadPicture = ({ onClose }: { onClose: () => void }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // if (index === -1) {
    //   onClose();
    // }
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={["95%"]}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{
          height: 0,
        }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesomeasd 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
