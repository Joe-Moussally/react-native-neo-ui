import { Avatar } from "@/core/components/Avatar";
import { Badge } from "@/core/components/Badge";
import { Box } from "@/core/components/Box";
import { Button } from "@/core/components/Button";
import { Typography } from "@/core/components/Typography";
import { Screen } from "@/core/navigation/Screen";
import { useTheme } from "@/core/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const POSTS_DATA = [
  {
    id: 1,
    content:
      "Just launched my new React Native app! 🚀 Excited to share it with the community.",
    likes: 42,
    comments: 12,
    timestamp: "2h",
  },
  {
    id: 2,
    content: "Beautiful sunset from my hiking trip this weekend 🌅",
    likes: 89,
    comments: 23,
    timestamp: "1d",
  },
  {
    id: 3,
    content:
      "Working on some exciting new features. Can't wait to show you all!",
    likes: 156,
    comments: 34,
    timestamp: "3d",
  },
];

export default function SocialProfileExample() {
  const { theme } = useTheme();

  const renderPost = (post: (typeof POSTS_DATA)[0]) => (
    <Box key={post.id} variant="soft" style={styles.postCard}>
      <View style={styles.postHeader}>
        <Avatar
          size="sm"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="JS"
        />
        <View style={styles.postInfo}>
          <Typography variant="body" style={{ fontWeight: "600" }}>
            John Smith
          </Typography>
          <Typography variant="caption" color={theme.colors.textSecondary}>
            {post.timestamp} ago
          </Typography>
        </View>
      </View>

      <Typography variant="body" style={styles.postContent}>
        {post.content}
      </Typography>

      <View style={styles.postActions}>
        <View style={styles.postStats}>
          <View style={styles.statItem}>
            <Ionicons name="heart" size={16} color={theme.colors.error} />
            <Typography variant="caption" style={styles.statText}>
              {post.likes}
            </Typography>
          </View>
          <View style={styles.statItem}>
            <Ionicons
              name="chatbubble"
              size={16}
              color={theme.colors.textSecondary}
            />
            <Typography variant="caption" style={styles.statText}>
              {post.comments}
            </Typography>
          </View>
        </View>
        <Button variant="ghost" size="sm">
          <Ionicons
            name="share-outline"
            size={16}
            color={theme.colors.primary}
          />
        </Button>
      </View>
    </Box>
  );

  return (
    <Screen
      title="Social Profile"
      options={{
        headerBackTitle: "Examples",
      }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <Box variant="soft" style={styles.profileHeader}>
          <View style={styles.coverSection}>
            <View style={styles.avatarSection}>
              <Avatar
                size="xl"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="JS"
                style={styles.profileAvatar}
              />
              <Badge
                color="success"
                variant="standard"
                badgeContent="●"
                style={styles.onlineBadge}
              >
                <View />
              </Badge>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Typography
              variant="h1"
              style={[styles.userName, { fontWeight: "bold" }]}
            >
              John Smith
            </Typography>
            <Typography variant="body" color={theme.colors.textSecondary}>
              Senior React Native Developer at TechCorp
            </Typography>
            <Typography
              variant="bodySmall"
              color={theme.colors.textSecondary}
              style={styles.location}
            >
              📍 San Francisco, CA
            </Typography>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statColumn}>
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                1.2K
              </Typography>
              <Typography variant="caption" color={theme.colors.textSecondary}>
                Following
              </Typography>
            </View>
            <View style={styles.statColumn}>
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                5.4K
              </Typography>
              <Typography variant="caption" color={theme.colors.textSecondary}>
                Followers
              </Typography>
            </View>
            <View style={styles.statColumn}>
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                342
              </Typography>
              <Typography variant="caption" color={theme.colors.textSecondary}>
                Posts
              </Typography>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Button variant="primary" style={styles.followButton}>
              Follow
            </Button>
            <Button variant="outline" style={styles.messageButton}>
              Message
            </Button>
            <Button variant="ghost" size="md">
              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color={theme.colors.primary}
              />
            </Button>
          </View>
        </Box>

        {/* Bio Section */}
        <Box variant="soft" style={styles.bioSection}>
          <Typography
            variant="h3"
            style={[styles.sectionTitle, { fontWeight: "600" }]}
          >
            About
          </Typography>
          <Typography variant="body" style={styles.bioText}>
            Passionate mobile developer with 5+ years of experience building
            beautiful and performant React Native applications. Love sharing
            knowledge and contributing to open source projects.
          </Typography>
          <View style={styles.interests}>
            <Badge
              color="secondary"
              variant="standard"
              badgeContent="React Native"
              style={styles.interestBadge}
            >
              <View />
            </Badge>
            <Badge
              color="secondary"
              variant="standard"
              badgeContent="TypeScript"
              style={styles.interestBadge}
            >
              <View />
            </Badge>
            <Badge
              color="secondary"
              variant="standard"
              badgeContent="UI/UX"
              style={styles.interestBadge}
            >
              <View />
            </Badge>
            <Badge
              color="secondary"
              variant="standard"
              badgeContent="Photography"
              style={styles.interestBadge}
            >
              <View />
            </Badge>
          </View>
        </Box>

        {/* Recent Posts */}
        <View style={styles.postsSection}>
          <Typography
            variant="h3"
            style={[styles.sectionTitle, { fontWeight: "600" }]}
          >
            Recent Posts
          </Typography>
          {POSTS_DATA.map(renderPost)}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    marginBottom: 16,
  },
  coverSection: {
    height: 120,
    backgroundColor: "#667eea",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: "flex-end",
    paddingBottom: 16,
  },
  avatarSection: {
    alignItems: "center",
    position: "relative",
  },
  profileAvatar: {
    borderWidth: 4,
    borderColor: "white",
  },
  onlineBadge: {
    position: "absolute",
    bottom: 8,
    right: "50%",
    marginRight: -30,
  },
  profileInfo: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  userName: {
    marginBottom: 4,
  },
  location: {
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  statColumn: {
    alignItems: "center",
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 12,
  },
  followButton: {
    flex: 1,
  },
  messageButton: {
    flex: 1,
  },
  bioSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  bioText: {
    marginBottom: 16,
    lineHeight: 22,
  },
  interests: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  interestBadge: {
    marginBottom: 4,
  },
  postsSection: {
    marginBottom: 20,
  },
  postCard: {
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postInfo: {
    marginLeft: 12,
    flex: 1,
  },
  postContent: {
    marginBottom: 16,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postStats: {
    flexDirection: "row",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    marginLeft: 4,
  },
});
