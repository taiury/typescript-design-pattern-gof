import { ImageEditor } from "./Image-Editor";
import { MementoProtocol } from "./Memento-Protocol";

export class ImageEditorBackupManager {
  private mementos: MementoProtocol[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log("Backup: no mementos");
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.name} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
