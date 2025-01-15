
import { Plugin } from "vencord";

export default class HideActivityPlugin extends Plugin {
  start() {
    console.log("HideActivityPlugin has started!");
    this.hideActivitySection();
  }

  stop() {
    console.log("HideActivityPlugin has stopped.");
    this.showActivitySection();
  }

  hideActivitySection() {
    const interval = setInterval(() => {
      const activitySection = document.querySelector('[class*="activityFeed"]');
      if (activitySection) {
        activitySection.style.display = "none";
        console.log("Activity section hidden!");
        clearInterval(interval);
      }
    }, 500);
  }

  showActivitySection() {
    const activitySection = document.querySelector('[class*="activityFeed"]');
    if (activitySection) {
      activitySection.style.display = "";
      console.log("Activity section shown!");
    }
  }
}
