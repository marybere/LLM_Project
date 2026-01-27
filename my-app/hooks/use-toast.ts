export interface Toast {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}

export function toast(props: Toast) {
  console.log("[Toast]", props.title, "-", props.description);
  
  // Show browser notification
  if (typeof window !== "undefined" && "Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(props.title, {
        body: props.description,
      });
    }
  }
}
