import { ConcreteMemento } from "./Concrete-Memento";
import { MementoProtocol } from "./Memento-Protocol";

export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split(".").slice(0, 1).join();
    this.filePath += "." + format;
  }

  save(): Readonly<MementoProtocol> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat
    );
  }

  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.filePath;
    this.fileFormat = concreteMemento.fileFormat;
  }
}
