import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";

const CHIBI = {
  name: "Chibi",
  personality: {
    spark: 34,
    sage: 33,
    heart: 33
  },
  emotion: "Happy"
};

export default function App() {
  const total =
    CHIBI.personality.spark +
    CHIBI.personality.sage +
    CHIBI.personality.heart;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>CHIBI-NIVERSE</Text>

        <Text style={styles.subtitle}>
          Your Chibi-tar. Your companion. Your universe.
        </Text>

        {/* CHIBI */}
        <View style={styles.chibiSection}>
          <View style={styles.chibi}>
            {/* Ears */}
            <View style={[styles.ear, styles.leftEar]} />
            <View style={[styles.ear, styles.rightEar]} />

            {/* Head */}
            <View style={styles.head}>
              {/* Eyes */}
              <View style={styles.eyes}>
                <View style={styles.eye}>
                  <View style={styles.pupil} />
                </View>

                <View style={styles.eye}>
                  <View style={styles.pupil} />
                </View>
              </View>

              {/* Nose */}
              <View style={styles.nose} />

              {/* Mouth */}
              <View style={styles.mouth} />

              {/* Cheeks */}
              <View style={[styles.cheek, styles.leftCheek]} />
              <View style={[styles.cheek, styles.rightCheek]} />
            </View>

            {/* Body */}
            <View style={styles.body} />
          </View>

          <Text style={styles.chibiName}>{CHIBI.name}</Text>

          <View style={styles.emotionBadge}>
            <Text style={styles.emotionText}>
              😊 Feeling {CHIBI.emotion}
            </Text>
          </View>
        </View>

        {/* PERSONALITY */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personality</Text>

          <PersonalityRow
            emoji="🔥"
            name="Spark"
            value={CHIBI.personality.spark}
          />

          <PersonalityRow
            emoji="🧠"
            name="Sage"
            value={CHIBI.personality.sage}
          />

          <PersonalityRow
            emoji="💚"
            name="Heart"
            value={CHIBI.personality.heart}
          />

          <Text style={styles.total}>
            Personality balance: {total}%
          </Text>
        </View>

        {/* INTRO */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Hey! 👋</Text>

          <Text style={styles.welcomeText}>
            I'm your Chibi-tar. I'm still growing, so you'll get to teach me,
            talk to me, and help shape who I become.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.startButton,
              pressed && styles.buttonPressed
            ]}
            onPress={() => {}}
          >
            <Text style={styles.startButtonText}>
              Start Talking
            </Text>
          </Pressable>
        </View>

        <Text style={styles.version}>
          CHIBI-NIVERSE • Foundation 1.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function PersonalityRow({ emoji, name, value }) {
  return (
    <View style={styles.personalityRow}>
      <View style={styles.personalityLabel}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.personalityName}>{name}</Text>
      </View>

      <Text style={styles.percentage}>{value}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F0"
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 35
  },

  logo: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#202020"
  },

  subtitle: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: "#777"
  },

  chibiSection: {
    alignItems: "center",
    marginTop: 28
  },

  chibi: {
    width: 210,
    height: 230,
    position: "relative",
    alignItems: "center"
  },

  ear: {
    position: "absolute",
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#C99062",
    top: 35,
    zIndex: 0
  },

  leftEar: {
    left: 18
  },

  rightEar: {
    right: 18
  },

  head: {
    position: "absolute",
    top: 15,
    width: 170,
    height: 155,
    borderRadius: 85,
    backgroundColor: "#E7B887",
    zIndex: 2,
    alignItems: "center"
  },

  eyes: {
    flexDirection: "row",
    gap: 38,
    marginTop: 52
  },

  eye: {
    width: 25,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },

  pupil: {
    width: 12,
    height: 17,
    borderRadius: 8,
    backgroundColor: "#252525"
  },

  nose: {
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#8C573E",
    marginTop: 8
  },

  mouth: {
    width: 28,
    height: 13,
    borderBottomWidth: 3,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#633F31",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: 6
  },

  cheek: {
    position: "absolute",
    width: 28,
    height: 14,
    borderRadius: 14,
    backgroundColor: "#E99D91",
    opacity: 0.7,
    top: 94
  },

  leftCheek: {
    left: 22
  },

  rightCheek: {
    right: 22
  },

  body: {
    position: "absolute",
    bottom: 0,
    width: 105,
    height: 95,
    borderRadius: 50,
    backgroundColor: "#DFA36F",
    zIndex: 1
  },

  chibiName: {
    fontSize: 27,
    fontWeight: "900",
    marginTop: -2,
    color: "#222"
  },

  emotionBadge: {
    marginTop: 8,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "#FFF"
  },

  emotionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555"
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginTop: 22,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 14,
    color: "#222"
  },

  personalityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 9
  },

  personalityLabel: {
    flexDirection: "row",
    alignItems: "center"
  },

  emoji: {
    fontSize: 20,
    width: 34
  },

  personalityName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333"
  },

  percentage: {
    fontSize: 16,
    fontWeight: "800",
    color: "#555"
  },

  total: {
    marginTop: 8,
    fontSize: 12,
    color: "#999"
  },

  welcomeCard: {
    marginTop: 18,
    padding: 22,
    borderRadius: 24,
    backgroundColor: "#222"
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900"
  },

  welcomeText: {
    color: "#E7E7E7",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8
  },

  startButton: {
    marginTop: 18,
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center"
  },

  buttonPressed: {
    opacity: 0.7
  },

  startButtonText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#222"
  },

  version: {
    textAlign: "center",
    marginTop: 25,
    color: "#999",
    fontSize: 12
  }
});
