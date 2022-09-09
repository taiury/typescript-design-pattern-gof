import { CustomerDataParser } from "./Customer-Data-Parser";
import { CustomerData } from "./Customer-Data";
import { promises } from "fs";

export class CustomerDataParserJson extends CustomerDataParser {
  async parseData(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const Customer of data) {
      const { name, age, cpf } = Customer;
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }
}
