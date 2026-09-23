import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";

const CHIBIS = {
  Spark: {
    emoji: "🔥",
    emotion: "Mischievous",
    description: "Energetic, confident and a little chaotic.",
    eyes: "#47D7FF",
    fur: "#B9784B",
    hair: "#5A3425",
    shirt: "#171717",
    traits: ["Wild spiked hair", "90s skater", "Freckles", "Ear plugs"]
  },

  Sage: {
    emoji: "🧠",
    emotion: "Smug",
    description: "Sharp, analytical and quietly amused.",
    eyes: "#858B91",
    fur: "#B9825B",
    hair: "#55372B",
    shirt: "#3979B9",
    traits: ["Modern quiff", "Round glasses", "Blue shirt", "Perfect posture"]
  },

  Heart: {
    emoji: "💚",
    emotion: "Playful",
    description: "Warm, affectionate and always ready for food.",
    eyes: "#6D8F6B",
    fur: "#C98B62",
    hair: "#E9D28B",
    shirt: "#4D8D68",
    traits: ["Blonde curls", "Always has earphones", "Baggy clothes", "Green style"]
  }
};

const PERSONALITY = {
  Spark: 34,
  Sage: 33,
  Heart: 33
};

export default function App() {
  const [selected, setSelected] = useState("Sage");
  const chibi = CHIBIS[selected];

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

        {/* CHARACTER */}
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>MEET YOUR CHIBI</Text>

          <ChibiCharacter type={selected} />

          <Text style={styles.chibiName}>{selected}</Text>

          <View style={styles.emotionBadge}>
            <Text style={styles.emotionText}>
              {chibi.emoji} Feeling {chibi.emotion}
            </Text>
          </View>

          <Text style={styles.description}>
            {chibi.description}
          </Text>
        </View>

        {/* CHARACTER SELECTOR */}
        <View style={styles.selector}>
          {Object.keys(CHIBIS).map((name) => (
            <Pressable
              key={name}
              onPress={() => setSelected(name)}
              style={[
                styles.selectorButton,
                selected === name && styles.selectorButtonActive
              ]}
            >
              <Text
                style={[
                  styles.selectorText,
                  selected === name && styles.selectorTextActive
                ]}
              >
                {CHIBIS[name].emoji} {name}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* SIGNATURE DESIGN */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Signature design</Text>

          <View style={styles.traits}>
            {chibi.traits.map((trait) => (
              <View key={trait} style={styles.trait}>
                <Text style={styles.traitText}>{trait}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* PERSONALITY */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personality</Text>

          <PersonalityRow
            emoji="🔥"
            name="Spark"
            value={PERSONALITY.Spark}
          />

          <PersonalityRow
            emoji="🧠"
            name="Sage"
            value={PERSONALITY.Sage}
          />

          <PersonalityRow
            emoji="💚"
            name="Heart"
            value={PERSONALITY.Heart}
          />

          <Text style={styles.total}>
            Personality balance: 100%
          </Text>
        </View>

        {/* INTRO */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Your Chibi is growing. ✨
          </Text>

          <Text style={styles.welcomeText}>
            You won't just chat with your Chibi. You'll teach it,
            correct it, learn with it and gradually shape its personality.
          </Text>

          <Pressable style={styles.startButton}>
            <Text style={styles.startButtonText}>
              Start Talking
            </Text>
          </Pressable>
        </View>

        <Text style={styles.version}>
          CHIBI-NIVERSE • Visual Foundation 1.1
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================
   CHIBI CHARACTER
========================= */

function ChibiCharacter({ type }) {
  const chibi = CHIBIS[type];

  const isSpark = type === "Spark";
  const isSage = type === "Sage";
  const isHeart = type === "Heart";

  return (
    <View style={styles.characterStage}>

      {/* EARS */}
      <View
        style={[
          styles.ear,
          styles.leftEar,
          { backgroundColor: chibi.fur }
        ]}
      />

      <View
        style={[
          styles.ear,
          styles.rightEar,
          { backgroundColor: chibi.fur }
        ]}
      />

      {/* HAIR */}

      {isSpark && (
        <View style={styles.sparkHair}>
          {Array.from({ length: 9 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.sparkSpike,
                {
                  transform: [
                    { rotate: `${-45 + index * 11}deg` }
                  ]
                }
              ]}
            />
          ))}
        </View>
      )}

      {isSage && (
        <View
          style={[
            styles.sageHair,
            { backgroundColor: chibi.hair }
          ]}
        />
      )}

      {isHeart && (
        <View style={styles.heartHair}>
          {Array.from({ length: 7 }).map((_, index) => (
            <View key={index} style={styles.curl} />
          ))}
        </View>
      )}

      {/* HEAD */}
      <View
        style={[
          styles.head,
          { backgroundColor: chibi.fur }
        ]}
      >

        {/* EYES */}
        <View style={styles.eyes}>

          {isHeart ? (
            <View style={styles.winkEye} />
          ) : (
            <View style={styles.eye}>
              <View
                style={[
                  styles.pupil,
                  { backgroundColor: chibi.eyes }
                ]}
              />
              <View style={styles.eyeHighlight} />
            </View>
          )}

          <View style={styles.eye}>
            <View
              style={[
                styles.pupil,
                { backgroundColor: chibi.eyes }
              ]}
            />
            <View style={styles.eyeHighlight} />
          </View>

        </View>

        {/* SAGE GLASSES */}
        {isSage && (
          <View style={styles.glasses}>
            <View style={styles.glass} />
            <View style={styles.bridge} />
            <View style={styles.glass} />
          </View>
        )}

        {/* SPARK FRECKLES */}
        {isSpark && (
          <View style={styles.freckles}>
            {Array.from({ length: 5 }).map((_, index) => (
              <View key={index} style={styles.freckle} />
            ))}
          </View>
        )}

        {/* NOSE */}
        <View style={styles.nose} />

        {/* MOUTH */}
        {isHeart ? (
          <View style={styles.tongueMouth}>
            <View style={styles.tongue} />
          </View>
        ) : (
          <View style={styles.smile} />
        )}

        {/* CHEEKS */}
        <View style={styles.cheekLeft} />
        <View style={styles.cheekRight} />

        {/* SPARK EYEBROW GAPS */}
        {isSpark && (
          <>
            <View style={styles.browLeft} />
            <View style={styles.browRight} />
          </>
        )}

      </View>

      {/* BODY */}
      <View
        style={[
          styles.body,
          { backgroundColor: chibi.shirt },

          isSpark && styles.sparkBody,
          isSage && styles.sageBody,
          isHeart && styles.heartBody
        ]}
      >

        {isSpark && (
          <View style={styles.prismGraphic} />
        )}

        {isSage && (
          <View style={styles.blueCollar} />
        )}

        {isHeart && (
          <View style={styles.greenStripe} />
        )}

      </View>

      {/* EARPHONES */}
      {isHeart && (
        <View style={styles.earphones}>
          <View style={styles.cordLeft} />
          <View style={styles.cordRight} />
        </View>
      )}

    </View>
  );
}

/* =========================
   PERSONALITY ROW
========================= */

function PersonalityRow({ emoji, name, value }) {
  return (
    <View style={styles.personalityRow}>

      <View style={styles.personalityLabel}>
        <Text style={styles.emoji}>{emoji}</Text>

        <Text style={styles.personalityName}>
          {name}
        </Text>
      </View>

      <Text style={styles.percentage}>
        {value}%
      </Text>

    </View>
  );
}

/* =========================
   STYLES
========================= */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F0"
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 36
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
    marginTop: 7,
    fontSize: 14,
    color: "#777"
  },

  hero: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingTop: 18,
    paddingBottom: 20
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#999"
  },

  characterStage: {
    width: 210,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },

  ear: {
    position: "absolute",
    top: 65,
    width: 58,
    height: 58,
    borderRadius: 29,
    zIndex: 0
  },

  leftEar: {
    left: 23
  },

  rightEar: {
    right: 23
  },

  head: {
    position: "absolute",
    top: 35,
    width: 154,
    height: 142,
    borderRadius: 77,
    alignItems: "center",
    zIndex: 3
  },

  eyes: {
    flexDirection: "row",
    gap: 30,
    marginTop: 53
  },

  eye: {
    width: 28,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center"
  },

  pupil: {
    width: 14,
    height: 19,
    borderRadius: 10
  },

  eyeHighlight: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    top: 6,
    left: 8
  },

  winkEye: {
    width: 29,
    height: 14,
    borderBottomWidth: 4,
    borderColor: "#333",
    borderRadius: 20,
    marginTop: 10
  },

  nose: {
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#80523D",
    marginTop: 9
  },

  smile: {
    width: 27,
    height: 13,
    borderBottomWidth: 3,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#633F31",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: 4
  },

  tongueMouth: {
    width: 30,
    height: 18,
    borderRadius: 15,
    backgroundColor: "#4D302B",
    marginTop: 4,
    alignItems: "center",
    overflow: "hidden"
  },

  tongue: {
    width: 14,
    height: 10,
    borderRadius: 8,
    backgroundColor: "#E78686",
    marginTop: 9
  },

  cheekLeft: {
    position: "absolute",
    left: 18,
    top: 92,
    width: 25,
    height: 13,
    borderRadius: 13,
    backgroundColor: "#E99D91",
    opacity: 0.65
  },

  cheekRight: {
    position: "absolute",
    right: 18,
    top: 92,
    width: 25,
    height: 13,
    borderRadius: 13,
    backgroundColor: "#E99D91",
    opacity: 0.65
  },

  /* SPARK */

  sparkHair: {
    position: "absolute",
    top: 10,
    width: 145,
    height: 70,
    zIndex: 5,
    alignItems: "center"
  },

  sparkSpike: {
    position: "absolute",
    width: 13,
    height: 58,
    borderRadius: 8,
    backgroundColor: "#5A3425"
  },

  freckles: {
    position: "absolute",
    top: 93,
    flexDirection: "row",
    gap: 5
  },

  freckle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#81513C"
  },

  browLeft: {
    position: "absolute",
    top: 40,
    left: 36,
    width: 18,
    height: 4,
    backgroundColor: "#55372B"
  },

  browRight: {
    position: "absolute",
    top: 40,
    right: 36,
    width: 18,
    height: 4,
    backgroundColor: "#55372B"
  },

  /* SAGE */

  sageHair: {
    position: "absolute",
    top: 12,
    left: 91,
    width: 72,
    height: 40,
    borderRadius: 25,
    zIndex: 5,
    transform: [{ rotate: "-8deg" }]
  },

  glasses: {
    position: "absolute",
    top: 48,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 6
  },

  glass: {
    width: 43,
    height: 38,
    borderWidth: 3,
    borderColor: "#343434",
    borderRadius: 22
  },

  bridge: {
    width: 11,
    height: 3,
    backgroundColor: "#343434"
  },

  /* HEART */

  heartHair: {
    position: "absolute",
    top: 13,
    width: 140,
    height: 50,
    zIndex: 5,
    flexDirection: "row",
    justifyContent: "center"
  },

  curl: {
    width: 31,
    height: 31,
    borderRadius: 17,
    backgroundColor: "#E9D28B",
    marginHorizontal: -4
  },

  body: {
    position: "absolute",
    bottom: 0,
    width: 112,
    height: 94,
    borderRadius: 42,
    zIndex: 2,
    alignItems: "center"
  },

  sparkBody: {
    width: 135,
    height: 88,
    borderRadius: 25
  },

  sageBody: {
    width: 92,
    height: 105,
    borderRadius: 18
  },

  heartBody: {
    width: 140,
    height: 94,
    borderRadius: 40
  },

  prismGraphic: {
    width: 30,
    height: 30,
    marginTop: 25,
    transform: [{ rotate: "45deg" }],
    borderWidth: 3,
    borderColor: "#A5A5A5"
  },

  blueCollar: {
    width: 56,
    height: 13,
    borderBottomWidth: 3,
    borderColor: "#DCEBFA",
    marginTop: 4
  },

  greenStripe: {
    width: 140,
    height: 10,
    backgroundColor: "#B8D9B4",
    marginTop: 38
  },

  earphones: {
    position: "absolute",
    top: 86,
    width: 150,
    height: 70,
    zIndex: 7
  },

  cordLeft: {
    position: "absolute",
    left: 34,
    top: 8,
    width: 2,
    height: 55,
    backgroundColor: "#242424",
    transform: [{ rotate: "15deg" }]
  },

  cordRight: {
    position: "absolute",
    right: 34,
    top: 8,
    width: 2,
    height: 55,
    backgroundColor: "#242424",
    transform: [{ rotate: "-15deg" }]
  },

  chibiName: {
    fontSize: 29,
    fontWeight: "900",
    color: "#222"
  },

  emotionBadge: {
    marginTop: 8,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "#F3F1ED"
  },

  emotionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#555"
  },

  description: {
    marginTop: 12,
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 28
  },

  selector: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14
  },

  selectorButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEE"
  },

  selectorButtonActive: {
    backgroundColor: "#222",
    borderColor: "#222"
  },

  selectorText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#555"
  },

  selectorTextActive: {
    color: "#FFFFFF"
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginTop: 16,
    elevation: 2
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 14,
    color: "#222"
  },

  traits: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },

  trait: {
    backgroundColor: "#F4F2EE",
    borderRadius: 14,
    paddingHorizontal: 11,
    paddingVertical: 8
  },

  traitText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#555"
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
    marginTop: 16,
    padding: 22,
    borderRadius: 24,
    backgroundColor: "#222"
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 23,
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

  startButtonText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#222"
  },

  version: {
    textAlign: "center",
    marginTop: 24,
    color: "#999",
    fontSize: 12
  }
});
