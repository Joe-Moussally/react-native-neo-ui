import { Alert } from "@joe111/neo-ui/Alert";
import { Avatar } from "@joe111/neo-ui/Avatar";
import { Box } from "@joe111/neo-ui/Box";
import { Button } from "@joe111/neo-ui/Button";
import { Typography } from "@joe111/neo-ui/Typography";
import { Screen } from "@joe111/neo-ui/navigation";
import { useTheme } from "@joe111/neo-ui/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "friend_request",
    title: "New Friend Request",
    message: "Sarah Johnson wants to connect with you",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b5b0c2ad?w=80&h=80&fit=crop&crop=face",
    time: "2 minutes ago",
    unread: true,
    actionable: true,
  },
  {
    id: 2,
    type: "like",
    title: "Post Liked",
    message: "Mike Chen and 23 others liked your photo",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    time: "1 hour ago",
    unread: true,
    actionable: false,
  },
  {
    id: 3,
    type: "comment",
    title: "New Comment",
    message: 'Emma Davis commented: "This looks amazing! 🔥"',
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    time: "3 hours ago",
    unread: false,
    actionable: false,
  },
  {
    id: 4,
    type: "system",
    title: "System Update",
    message: "Your app has been updated to version 2.1.0 with new features",
    avatar: null,
    time: "1 day ago",
    unread: false,
    actionable: false,
  },
  {
    id: 5,
    type: "reminder",
    title: "Meeting Reminder",
    message: "Team standup meeting starts in 15 minutes",
    avatar: null,
    time: "2 days ago",
    unread: false,
    actionable: true,
  },
];

export default function NotificationCenterExample() {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "friend_request":
        return "person-add";
      case "like":
        return "heart";
      case "comment":
        return "chatbubble";
      case "system":
        return "settings";
      case "reminder":
        return "time";
      default:
        return "notifications";
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "friend_request":
        return theme.colors.info;
      case "like":
        return theme.colors.error;
      case "comment":
        return theme.colors.success;
      case "system":
        return theme.colors.warning;
      case "reminder":
        return theme.colors.accent;
      default:
        return theme.colors.primary;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, unread: false }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Screen
      title="Notifications"
      options={{
        headerBackTitle: "Examples",
      }}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header with actions */}
        <Box variant="soft" style={styles.headerCard}>
          <View style={styles.headerContent}>
            <View>
              <Typography variant="h2" style={{ fontWeight: "bold" }}>
                Notifications
              </Typography>
              <Typography variant="body" color={theme.colors.textSecondary}>
                {unreadCount > 0 ? `${unreadCount} unread` : "All caught up!"}
              </Typography>
            </View>
            <View style={styles.headerActions}>
              {unreadCount > 0 && (
                <Button variant="ghost" onPress={markAllAsRead} size="sm">
                  Mark all read
                </Button>
              )}
              <Button variant="ghost" onPress={clearAll} size="sm">
                <Ionicons
                  name="trash-outline"
                  size={16}
                  color={theme.colors.textSecondary}
                />
              </Button>
            </View>
          </View>
        </Box>

        {/* System Alerts */}
        <View style={styles.alertsSection}>
          <Alert
            variant="info"
            title="New Features Available"
            description="Check out the latest updates in your app settings"
            action={{
              label: "View Updates",
              onPress: () => console.log("View updates"),
            }}
            style={styles.systemAlert}
          />
        </View>

        {/* Notifications List */}
        <View style={styles.notificationsList}>
          {notifications.length === 0 ? (
            <Box variant="soft" style={styles.emptyState}>
              <Ionicons
                name="notifications-off"
                size={48}
                color={theme.colors.textSecondary}
                style={styles.emptyIcon}
              />
              <Typography
                variant="h3"
                color={theme.colors.textSecondary}
                style={{ textAlign: "center" }}
              >
                No notifications
              </Typography>
              <Typography
                variant="body"
                color={theme.colors.textSecondary}
                style={{ textAlign: "center" }}
              >
                You're all caught up! New notifications will appear here.
              </Typography>
            </Box>
          ) : (
            notifications.map((notification) => (
              <TouchableOpacity
                key={notification.id}
                onPress={() => markAsRead(notification.id)}
                activeOpacity={0.7}
              >
                <Box
                  variant={notification.unread ? "soft" : "transparent"}
                  style={[
                    styles.notificationCard,
                    notification.unread && styles.unreadCard,
                  ]}
                >
                  <View style={styles.notificationContent}>
                    <View style={styles.notificationLeft}>
                      {notification.avatar ? (
                        <Avatar
                          size="md"
                          src={notification.avatar}
                          alt="User"
                        />
                      ) : (
                        <View
                          style={[
                            styles.iconContainer,
                            {
                              backgroundColor:
                                getNotificationColor(notification.type) + "20",
                            },
                          ]}
                        >
                          <Ionicons
                            name={getNotificationIcon(notification.type) as any}
                            size={24}
                            color={getNotificationColor(notification.type)}
                          />
                        </View>
                      )}
                    </View>

                    <View style={styles.notificationBody}>
                      <View style={styles.notificationHeader}>
                        <Typography
                          variant="body"
                          style={{ fontWeight: "600" }}
                        >
                          {notification.title}
                        </Typography>
                        {notification.unread && (
                          <View
                            style={[
                              styles.unreadDot,
                              { backgroundColor: theme.colors.accent },
                            ]}
                          />
                        )}
                      </View>

                      <Typography
                        variant="body"
                        color={theme.colors.textSecondary}
                        style={styles.notificationMessage}
                      >
                        {notification.message}
                      </Typography>

                      <Typography
                        variant="caption"
                        color={theme.colors.textSecondary}
                      >
                        {notification.time}
                      </Typography>

                      {notification.actionable &&
                        notification.type === "friend_request" && (
                          <View style={styles.actionButtons}>
                            <Button
                              variant="primary"
                              size="sm"
                              style={styles.acceptButton}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              style={styles.declineButton}
                            >
                              Decline
                            </Button>
                          </View>
                        )}

                      {notification.actionable &&
                        notification.type === "reminder" && (
                          <View style={styles.actionButtons}>
                            <Button variant="outline" size="sm">
                              Join Meeting
                            </Button>
                          </View>
                        )}
                    </View>
                  </View>
                </Box>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* Bottom Alert */}
        {notifications.length > 0 && (
          <Alert
            variant="warning"
            title="Privacy Reminder"
            description="Review your notification preferences in settings"
            dismissible
            style={styles.bottomAlert}
          />
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCard: {
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  alertsSection: {
    marginBottom: 16,
  },
  systemAlert: {
    marginBottom: 8,
  },
  notificationsList: {
    gap: 8,
    marginBottom: 16,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    gap: 16,
  },
  emptyIcon: {
    marginBottom: 8,
  },
  notificationCard: {
    marginBottom: 8,
  },
  unreadCard: {
    borderLeftWidth: 3,
    borderLeftColor: "#007aff",
  },
  notificationContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  notificationLeft: {
    marginRight: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBody: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  notificationMessage: {
    marginBottom: 8,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  acceptButton: {
    flex: 1,
  },
  declineButton: {
    flex: 1,
  },
  bottomAlert: {
    marginBottom: 20,
  },
});
