import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

export const minimize = async () => {
    console.log("clcked");
    
    await appWindow.minimize();
};

export const close = async () => {
    await appWindow.close();
};