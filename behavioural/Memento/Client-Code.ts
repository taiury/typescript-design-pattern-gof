import { ImageEditor } from "./Image-Editor";
import { ImageEditorBackupManager } from "./Image-Editor-Backup-Manager";

const imageEditor = new ImageEditor("/media/image.png", "png");
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo("gif");

backupManager.backup();
imageEditor.convertFormatTo("pdf");

backupManager.backup();
imageEditor.convertFormatTo("webp");

console.log(imageEditor); //webp

backupManager.undo();
console.log(imageEditor); //pdf

backupManager.undo();
console.log(imageEditor); //gif

backupManager.undo();
console.log(imageEditor); //png

backupManager.undo(); // no mementos
console.log(imageEditor); //png
